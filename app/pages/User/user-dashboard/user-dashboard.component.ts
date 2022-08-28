import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  public name = null;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.name = this.userService.getUsername();
  }

}
