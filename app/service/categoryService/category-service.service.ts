import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../userService/helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private httpClient: HttpClient) {

  }

  public showCategories() {
    return this.httpClient.get(`${baseUrl}/category/`);
  }

  public addCategory(category: any) {
    return this.httpClient.post(`${baseUrl}/category`, category);
  }
}
