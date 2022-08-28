import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/service/categoryService/category-service.service';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.css']
})
export class UserCategoriesComponent implements OnInit {
  public categories: any;
  constructor(private CategorySer: CategoryServiceService) { }

  ngOnInit(): void {
    this.CategorySer.showCategories().subscribe((dataa: any) => {
      console.log(dataa);
      this.categories = dataa;
    }, (error: any) => {
      console.log(error);

    }
    )
  }


}
