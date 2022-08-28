import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {


    Swal.fire({
      text: "Logged out successfully",
      icon: 'success',
      confirmButtonText: 'Ok'
    })

    this.userService.logout();


    window.location.href = '/login'
  }

}
