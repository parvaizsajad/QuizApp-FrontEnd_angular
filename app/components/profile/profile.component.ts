import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userService: UserServiceService) { }

  ngOnInit(): void {
  }
  shown = false;
  changeShow = () => {
    if (this.shown) {
      this.shown = false;
    } else {
      this.shown = true;
    }
  }
}
