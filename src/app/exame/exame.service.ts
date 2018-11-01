import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Exame } from './exame';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ExameService implements OnInit {

   // Placeholder for last id so we can simulate
   // automatic incrementing of id's
  


  constructor(private appService: AppService, private apiService: ApiService) {}


  ngOnInit() {}

  // Simulate POST /exame
  add(examej,idUser): any {
    // if (!exame.id) {
    //   exame.id = ++this.lastId;
    // }

    return this.apiService.post('/pacientes/' + idUser + '/exames/', examej);
  }

  getById(id: any, id2:any): Observable<any>{

    return this.apiService.getById('/pacientes/' +id + '/exames', id2);

  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

  // Simulate PUT /exame/:id
  update(newExame: Exame, id: any, id2:any) {
    return this.apiService.put('pacientes/' + id2 + '/exames/' + id, newExame);
  }

  // Simulate GET /books
  getAll(id:any): any {
    return this.apiService.getAll('pacientes/' +id + '/exames');
  }

  // // Simulate GET /books/:id
  // getById(id: number): Exame {
  //   return this.exames
  //     .filter(exame => exame.id === id)
  //     .pop();
  // }

  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }

}
