import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../userService/helper';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private httpClient: HttpClient) { }


  public getQuizes() {
    return this.httpClient.get(`${baseUrl}/quiz`)
  }
  public addQuizes(data: any) {
    return this.httpClient.post(`${baseUrl}/quiz`, data)
  }
  public deleteQuiz(qid: any) {
    //http://localhost:9090/quiz/3
    return this.httpClient.delete(`${baseUrl}/quiz/${qid}`, qid)
  }

  public getquiz(qId: any) {
    return this.httpClient.get(`${baseUrl}/quiz/${qId}`, qId);
  }

  public updatequiz(data: any) {
    return this.httpClient.put(`${baseUrl}/quiz`, data)
  }
  //@GetMapping("/quiz/category/{id}")
  public getquizByCategory(Cid: any) {
    return this.httpClient.get(`${baseUrl}/quiz/category/${Cid}`, Cid);
  }

  public Results(question: any) {
    return this.httpClient.post(`${baseUrl}/results`, question);
  }
}