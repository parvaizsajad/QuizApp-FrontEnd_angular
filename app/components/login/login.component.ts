import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = {
    username: '',
    password: ''
  }
  constructor(private userService: UserServiceService,
    private _snack: MatSnackBar, private router: Router
  ) { }

  ngOnInit(): void {
  }
  loginform = () => {
    if (this.data.username.trim() == null || this.data.password.trim() == null && this.data.username.trim() == '' || this.data.password.trim() == '') {
      this._snack.open("Fields can not be null", "", {
        duration: 2000
      })
      return;
    }
    this.userService.generateToken(this.data).subscribe((value: any) => {

      console.log(value);
      this.userService.saveToken(value.token);




      Swal.fire({
        text: this.data.username + " is Logged In successfully",
        icon: 'success',
        confirmButtonText: 'Ok'
      })

      this.userService.getCurrentUser().subscribe((user: any) => {
        console.log(user);


        this.userService.setUserDetails(user);
        let role = this.userService.getRole();
        console.log(role);

        if (role == 'NORMAL') {
          // location.href = '/userDashboard'
          this.router.navigate(['/userDashboard/allQuizes']);

          this.userService.userSubject.next(true);
        }
        else if (role == 'ADMIN') {
          this.router.navigate(['adminDashboard'])
          this.userService.userSubject.next(true);
          // location.href = '/adminDashboard'

        }
        else {
          this.userService.logout();
        }








      }, (error1: any) => {
        console.log(error1);

      })

    },
      (error) => {
        console.log(error);
        Swal.fire({
          text: 'sorry some error has been occurred',
          icon: 'error',
          confirmButtonText: 'Ok'
        })

      }
    )
  }

}
