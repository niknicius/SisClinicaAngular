import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Exame } from './exame';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()

export class ExameService implements OnInit {

   // Placeholder for last id so we can simulate
   // automatic incrementing of id's
  
   private id: number;
   private id2: number;

  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService, private apiService: ApiService) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.id2 = params['id2'];
    });

  }

  // Simulate POST /exame
  add(id: any, examej): any {
    // if (!exame.id) {
    //   exame.id = ++this.lastId;
    // }

    return this.apiService.postExame('pacientes/' + id + '/exames', examej);
  }

  getById(id: any): Observable<any>{

    return this.apiService.getByIdExame('exame', id);

  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

  // Simulate PUT /exame/:id
  update(newExame: Exame, id: any, id2: any) {
    return this.apiService.putExame('pacientes/' + id + '/exames/' + id2, newExame);
  }

  // Simulate GET /books
  getAll(): any {
    return this.apiService.getAllExame();
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
