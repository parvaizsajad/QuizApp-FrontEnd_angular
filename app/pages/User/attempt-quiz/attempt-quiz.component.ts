import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/service/questionService/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.css']
})
export class AttemptQuizComponent implements OnInit {
  data = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
  }
  QuizResult: any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  timer = 100;
  t: any;
  public qid: any;
  question: any;
  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
  isSubmit = true;
  noQuestHome = false;
  constructor(private locationSt: LocationStrategy, private activatedRoute: ActivatedRoute,
    private QuestionService: QuestionServiceService) { }

  ngOnInit(): void {

    this.qid = this.activatedRoute.snapshot.params['id'];
    this.QuestionService.getQuestions(this.qid).subscribe((success) => {
      this.question = success;
      this.timer = this.question.length * 1 * 60;
      this.question.forEach((q: any) => {
        q['yourAnswer'] = ''

      });
      this.timerProgress();
      console.log(success);

    }, (error) => {
      console.log(error);

    })

    this.preventBackButton();

    if (this.question.length === 0) {
      this.noQuestHome = true;

    }
  }
  preventBackButton() {
    history.pushState(null, location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, location.href)
    })
  }

  printresults() {
    window.print()
  }

  submitQuiz() {
    Swal.fire({
      icon: 'info',
      title: 'Do you want to submit ?',
      confirmButtonText: 'Start',
      showCancelButton: true,
    }).then((result: any) => {
      if (result.isConfirmed) {

        // this.evalQuiz();
        this.results();
        clearInterval(this.t)
      }
    })
  }
  evalQuiz() {
    this.question.forEach((j: any) => {
      this.isSubmit = false;
      if (j.answer == j.yourAnswer) {
        this.correctAnswers++;
        let MarksPerQ = this.question[0].quiz.maxMarks / this.question.length;
        this.marksGot += MarksPerQ;

      }
      if (j.yourAnswer != '') {
        this.attempted += 1;
      }
      if (this.question.length < 1) {
        this.noQuestHome = true;
      }
    })

  }

  timerProgress = () => {
    this.t = window.setInterval(() => {
      if (this.timer <= 0) {

        this.evalQuiz();
        clearInterval(this.t)
      } else {
        this.timer--;
      }
    }, 1000);
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer / 60)
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`
  }
  results() {
    this.QuestionService.Results(this.question).subscribe((success) => {
      this.isSubmit = false;

      this.QuizResult = success;
      console.log(success);

    }, (error) => {
      console.log(error);

    })
  }

}
