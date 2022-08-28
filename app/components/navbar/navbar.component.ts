import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/userService/user-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: any = null;
  currentUser = null;
  role = null;
  logout: any = null;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    //we are subscribing the data and setting the data in it;
    this.userService.userSubject.asObservable().subscribe((e) => {
      this.isLoggedIn = this.userService.getUsername()
      this.currentUser = this.userService.getUsername();
      this.role = this.userService.getRole();


    })

    this.isLoggedIn = this.userService.getUsername()
    this.currentUser = this.userService.getUsername();
    this.role = this.userService.getRole();
  }




}
