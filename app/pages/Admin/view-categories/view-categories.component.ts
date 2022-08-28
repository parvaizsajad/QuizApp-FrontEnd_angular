import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/service/categoryService/category-service.service';


@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  categories: any = null;
  constructor(private categoryService: CategoryServiceService) {

  }

  ngOnInit(): void {

    this.categoryService.showCategories().subscribe((dataa: any) => {
      console.log(dataa);
      this.categories = dataa;
    }, (error: any) => {
      console.log(error);

    }
    )
  }

}
