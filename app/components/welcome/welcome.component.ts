import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username = null;
  constructor(protected userService: UserServiceService) { }

  ngOnInit(): void {
    this.username = this.userService.getUser();
  }

}
