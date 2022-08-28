import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserServiceService } from "../userService/user-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService: UserServiceService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authreq = req;

        const token = this.userService.getToken();
        //console.log("inside interceptor" + token);


        if (token != null) {

            authreq = authreq.clone({
                setHeaders: { Authorization: `Bearer ${token}` },
            })
        }


        //  console.log(authreq);

        return next.handle(authreq);
    }

}
export const authInterceptorProvider = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    },
];