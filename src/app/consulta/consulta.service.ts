import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Consulta } from './consulta';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class ConsultaService implements OnInit {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's


  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService, private apiService: ApiService) {}

  ngOnInit() {

  }

  // Simulate POST /books
  add(consultak): any {
    // if (!consulta.id) {
    //   consulta.id = ++this.lastId;
    // }

    return this.apiService.post('consulta', consultak);
  }

  getById(id: any): Observable<any>{

    return this.apiService.getById('consulta',id);

  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }


  // Simulate DELETE /books/:id
  delete(id: number): any {
    console.log('delete service');
    return this.apiService.delete('consultas/', id);
  }

  // Simulate PUT /books/:id
  update(newConsulta: Consulta, id: number) {
    return this.apiService.put('consultas/' + id, newConsulta);
  }

  // Simulate GET /books
  getAll(): any {
    return this.apiService.getAll('consulta');
  }

  // // Simulate GET /books/:id
  // getById(id: number): Consulta {
  //   return this.consulta
  //     .filter(consulta => consulta.id === id)
  //     .pop();
  // }

  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }

}
