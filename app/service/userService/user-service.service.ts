import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public userSubject = new Subject<boolean>;

  constructor(private httpClient: HttpClient) { }
  //Register user
  public addUser(user: any) {
    return this.httpClient.post(`${baseUrl}/user`, user);
  }
  // get current user
  public getCurrentUser() {
    return this.httpClient.get(`${baseUrl}/currentUser`);
  }
  //Login generate token
  public generateToken(data: any) {
    return this.httpClient.post(`${baseUrl}/token`, data);
  }


  // save token to the local storage
  public saveToken(token: any) {
    localStorage.setItem("token", token);
    return true;

  }

  //check if the user is logged in
  public IsLoggedIn() {
    let user = localStorage.getItem('user');
    if (user != undefined || user != null || user != '') {
      return true;
    } else {
      return false;
    }

  }

  //Logout : remove token from local storage
  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    localStorage.clear()

  }

  // get token
  public getToken() {
    return localStorage.getItem('token')
  }

  // set user details
  public setUserDetails(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  //get User
  public getUser() {
    let user = localStorage.getItem("user");
    if (user != null) {
      let uusr = JSON.parse(user);
      return uusr;
    } else
      this.logout();
    return null;
  }

  // get user Role
  public getRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
  //get username from user
  public getUsername() {
    let user = this.getUser();
    return user.username;
  }

}
