import { Component } from '@angular/core';
import {QuestionService} from "./dynamic-form/question.service";
import {Observable} from "rxjs";
import {QuestionBase} from "./dynamic-form/question-base";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'forms';

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }r
}
