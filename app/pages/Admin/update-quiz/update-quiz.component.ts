import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/service/categoryService/category-service.service';
import { QuizServiceService } from 'src/app/service/QuizService/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  quizId = 0;
  SingleQuiz = {
    "qId": "",
    "title": "",
    "description": "",
    "maxMarks": "",
    "numberOfQuestions": "",
    "active": '',
    "category": {
      "cid": ""
    }
  }
  category: any;
  constructor(private route: ActivatedRoute, private quizService: QuizServiceService
    , private categoryService: CategoryServiceService, private router: Router) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['qid'];

    console.log(this.quizId + " quiz id");

    this.categoryService.showCategories().subscribe((sucess) => {
      this.category = sucess;
      console.log(this.category);

    }, (error) => { })

    this.quizService.getquiz(this.quizId).subscribe((success: any) => {
      this.SingleQuiz.qId = success.qId;
      this.SingleQuiz.title = success.title;
      this.SingleQuiz.description = success.description;
      this.SingleQuiz.maxMarks = success.maxMarks;
      this.SingleQuiz.numberOfQuestions = success.numberOfQuestions;
      this.SingleQuiz.active = success.active;
      this.SingleQuiz.category.cid = success.category.cid;

      console.log(this.SingleQuiz);


    }, (error) => {
      console.log(error)
    })

  }
  updateForm = () => {
    console.log(this.SingleQuiz.qId + " single quiz cid");

    this.quizService.updatequiz(this.SingleQuiz).subscribe((data) => {
      console.log(data);

      Swal.fire({
        text: 'updated sucessfully',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      this.router.navigate(['/adminDashboard/viewQuizes'])
    }, (error) => { })
  }
}
