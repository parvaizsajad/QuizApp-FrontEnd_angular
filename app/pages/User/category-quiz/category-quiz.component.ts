import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/service/questionService/question-service.service';
import { QuizServiceService } from 'src/app/service/QuizService/quiz-service.service';

@Component({
  selector: 'app-category-quiz',
  templateUrl: './category-quiz.component.html',
  styleUrls: ['./category-quiz.component.css']
})
export class CategoryQuizComponent implements OnInit {
  public catQuizes: any;
  public categoryId: any;
  constructor(private quizServic: QuizServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['cid'];
    console.log(this.categoryId);

    this.quizServic.getquizByCategory(this.categoryId).subscribe(
      (data) => {
        console.log(data);

        this.catQuizes = data;
      }, (error) => {

      })
  }

}
