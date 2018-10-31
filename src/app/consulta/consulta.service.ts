import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Consulta } from './consulta';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsultaService implements OnInit {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's


  constructor(private appService: AppService, private apiService: ApiService) {}

  ngOnInit() {

  }

  // Simulate POST /books
  add(consultak): any {
    // if (!consulta.id) {
    //   consulta.id = ++this.lastId;
    // }

<<<<<<< HEAD
    return this.apiService.post('consultas', consulta);
=======
    return this.apiService.post('consulta', consulta);
>>>>>>> ad8083661d325ef52b4e98125d4e373289b8ed9e
  }

  getById(id: any): Observable<any>{

    return this.apiService.getById('consultas',id);

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
<<<<<<< HEAD
    return this.apiService.getAll('consultas');
=======
    return this.apiService.getAll('consulta');
>>>>>>> ad8083661d325ef52b4e98125d4e373289b8ed9e
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
