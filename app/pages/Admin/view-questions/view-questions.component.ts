import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/service/questionService/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
  qId: any;
  question: any;
  title: any;
  constructor(private questionService: QuestionServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qId'];
    this.title = this.route.snapshot.params['qTitle']

    this.questionService.getQuestions(this.qId).subscribe((data) => {
      this.question = data;

      console.log(data);
      console.log(this.qId);


    },
      (error) => { })
  }

  deleteQuestion(id: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.questionService.deleteQuestion(id).subscribe((success: any) => {
          console.log(success);

          Swal.fire({
            text: 'Deleted',
            icon: 'success',
            confirmButtonText: 'ok'
          })
        }, (error: any) => {
          console.log(error);
          console.log('error');

          this.question = this.question.filter((q: any) => q.id != id);
          Swal.fire({
            text: 'Quiz Deleted',
            icon: 'success',
            confirmButtonText: 'ok'
          })

        })
      }
    })

  }

}
