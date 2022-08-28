import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServiceService } from 'src/app/service/categoryService/category-service.service';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit {
  public categories: any;

  constructor(private categoryService: CategoryServiceService, private smackk: MatSnackBar) { }

  ngOnInit(): void {
    this.categories = this.categoryService.showCategories().subscribe((success) => {
      this.categories = success;
    }, (error) => {
      this.smackk.open("something went wrong", "", {
        duration: 2000
      })
    })
  }

}
