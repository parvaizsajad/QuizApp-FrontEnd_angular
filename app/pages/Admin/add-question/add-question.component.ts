import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServiceService } from 'src/app/service/questionService/question-service.service';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qId: any;

  title: any;
  data = {
    "content": " ",
    "option1": "",
    "option2": "",
    "option3": "",
    "option4": "",
    "answer": "",
    "quiz": {
      "qId": 0
    }
  }
  router: any;
  constructor(private questionService: QuestionServiceService, private route: ActivatedRoute,
    private routing: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qId'];
    this.title = this.route.snapshot.params['qTitle']
    this.data.quiz.qId = this.qId;
  }

  saveQuestion() {

    if (this.data.answer == '') {
      this.snackbar.open("Answer can not be empty", "", {
        duration: 2000
      })
    } else {

      this.questionService.PostQuestion(this.data).subscribe((success) => {
        console.log(success);
        Swal.fire({
          text: 'Question Added successfully',
          icon: 'success',
          confirmButtonText: 'ok'
        })
        //
        this.routing.navigate([`/adminDashboard/viewQuestions/ ${this.qId}/${this.title}`])
      }, (error) => { })
    }
  }
}
