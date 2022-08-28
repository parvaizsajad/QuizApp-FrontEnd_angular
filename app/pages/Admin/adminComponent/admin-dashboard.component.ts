import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/userService/user-service.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private userService: UserServiceService) { }
  isloggedin = false;
  ngOnInit(): void {
  }


}
