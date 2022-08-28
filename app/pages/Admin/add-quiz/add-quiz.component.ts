import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/service/categoryService/category-service.service';
import { QuizServiceService } from 'src/app/service/QuizService/quiz-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  category: any = null;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  data = {
    "title": "",
    "description": "",
    "maxMarks": "",
    "numberOfQuestions": "",
    "active": '',
    "category": {
      "cid": ""
    }
  }
  constructor(private quizService: QuizServiceService, private categoryService: CategoryServiceService,
    private snackBar: MatSnackBar, private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.showCategories().subscribe((cat: any) => {
      this.category = cat;
    }
      , (error) => {
      })
  }
  addQuizes = () => {
    if (this.data.title.trim() == '' || this.data.description.trim() == '',
      this.data.maxMarks.trim() == '', this.data.numberOfQuestions.trim() == ''
    ) {
      this.snackBar.open("data can not be empty", "", {
        duration: 2000
      })
    }
    this.quizService.addQuizes(this.data).subscribe((success) => {

      console.log(success);
      Swal.fire({
        text: "Quiz Added",
        icon: 'success',
        confirmButtonText: 'ok'

      })
      this.router.navigate(['/adminDashboard/viewQuizes'])


    }, (error) => {
      Swal.fire({
        text: "Something went Wrong",
        icon: 'error',
        confirmButtonText: 'ok'
      })

    })
  }
}
