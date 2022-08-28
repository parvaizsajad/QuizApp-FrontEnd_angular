import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/service/QuizService/quiz-service.service';

@Component({
  selector: 'app-load-all-quizes',
  templateUrl: './load-all-quizes.component.html',
  styleUrls: ['./load-all-quizes.component.css']
})
export class LoadAllQuizesComponent implements OnInit {
  public quizes: any;
  constructor(private quizService: QuizServiceService) { }

  ngOnInit(): void {
    this.quizes = this.quizService.getQuizes().subscribe((success: any) => {
      this.quizes = success;
    }, (error: any) => { })
  }

}
