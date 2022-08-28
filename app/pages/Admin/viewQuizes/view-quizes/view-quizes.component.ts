import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/service/QuizService/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class viewQuizesComponent implements OnInit {

  constructor(private quizService: QuizServiceService) { }
  quizes: any = null;
  ngOnInit(): void {

    this.quizService.getQuizes().subscribe((dataa: any) => {
      console.log(dataa);
      this.quizes = dataa;

    }, (error: any) => {
      console.log(error);

    }
    )
  }


  deleteQuiz = (_id: any) => {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: 'Quiz Deleted',
          icon: 'success',
          confirmButtonText: 'ok'
        })

        this.quizService.deleteQuiz(_id).subscribe((success: any) => {
          console.log(success);

          Swal.fire({
            text: 'Deleted',
            icon: 'success',
            confirmButtonText: 'ok'
          })
        }, (error: any) => {
          console.log(error);

          this.quizes = this.quizes.filter((quiz: { qId: any; }) => quiz.qId != _id);
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


