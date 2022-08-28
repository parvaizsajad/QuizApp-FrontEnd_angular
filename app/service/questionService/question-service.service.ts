import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../userService/helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private httpClient: HttpClient) { }

  public getQuestions(qId: any) {
    return this.httpClient.get(`${baseUrl}/question/quiz/${qId}`, qId)
  }

  public PostQuestion(data: any) {
    return this.httpClient.post(`${baseUrl}/question`, data)
  }
  public deleteQuestion(id: any) {
    return this.httpClient.delete(`${baseUrl}/question/${id}`, id)
  }

  public Results(question: any) {
    return this.httpClient.post(`${baseUrl}/results`, question);
  }

}
