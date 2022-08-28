import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServiceService } from 'src/app/service/categoryService/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  data = {
    'title': '',
    'description': ''

  }
  constructor(private snackbar: MatSnackBar, private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
  }
  addcategory = () => {

    console.log(this.data.title);
    if (this.data.title.trim() == '' || this.data.description.trim() == '') {
      this.snackbar.open("Data can not be empty", '', {
        duration: 2000
      })


    } else {
      this.categoryService.addCategory(this.data).subscribe((success) => {
        console.log(success);

        Swal.fire({
          text: "Category Added Successfully",
          icon: "success",
          confirmButtonText: 'ok'
        })

      }, (error) => {
        console.log(error);
        Swal.fire({
          text: "Error has occured",
          icon: 'error',
          confirmButtonText: 'ok'
        })

      })
    }

  }
}
