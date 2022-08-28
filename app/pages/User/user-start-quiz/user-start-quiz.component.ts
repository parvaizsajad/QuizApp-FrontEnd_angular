import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizServiceService } from 'src/app/service/QuizService/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-start-quiz',
  templateUrl: './user-start-quiz.component.html',
  styleUrls: ['./user-start-quiz.component.css']
})
export class UserStartQuizComponent implements OnInit {
  public Qid: any;
  public quiz: any;
  constructor(private route: ActivatedRoute, private quizservice: QuizServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.Qid = this.route.snapshot.params['qid'];
    console.log(this.Qid);


    this.quizservice.getquiz(this.Qid).subscribe((data) => {
      this.quiz = data;
      console.log(data);

    }, (error => {
      console.log(error);

    }))

  }
  startQuiz() {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Start',
      showCancelButton: true,
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.router.navigate(['/attempt/' + this.Qid])

      }
    })
  }
}
