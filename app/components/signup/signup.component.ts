import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    "username": '',
    "email": '',
    "firstname": '',
    "lastname": '',
    "password": '',
    "phone": ''



  }

  constructor(private userService: UserServiceService, private _snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }
  submitForm() {
    if (this.user.username == '' || this.user.username == null) {
      this._snack.open("username is required", '', {
        duration: 2000,
      });
      return;


    }

    this.userService.addUser(this.user).subscribe((success) => {
      console.log(success);
      Swal.fire({
        text: this.user.username + " is registered successfully",
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.router.navigate(['login'])
    }, (error) => {
      console.log(error);
      Swal.fire({
        text: error.error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })

    }
    )


  }
}
