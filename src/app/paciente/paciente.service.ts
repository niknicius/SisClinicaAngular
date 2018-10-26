import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Paciente } from './paciente';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PacienteService implements OnInit {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's


  constructor(private appService: AppService, private apiService: ApiService) {}

  ngOnInit() {

  }

  // Simulate POST /books
  add(pacientej): any {
    // if (!paciente.id) {
    //   paciente.id = ++this.lastId;
    // }

    return this.apiService.post('pacientes', pacientej);
  }

  getById(id: any): Observable<any>{

    return this.apiService.getById('pacientes',id);

  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }


  // Simulate DELETE /books/:id
  delete(id: number): any {
    console.log('delete service');
    return this.apiService.delete('pacientes/', id);
  }

  // // Simulate PUT /books/:id
  // update(newPaciente: Paciente): Paciente {
  //   const oldPaciente = this.getById(newPaciente.id);
  //   if (!oldPaciente) {
  //     return;
  //   }
  //   Object.assign(oldPaciente, newPaciente);
  //   return oldPaciente;
  // }

  // Simulate GET /books
  getAll(): any {
    return this.apiService.getAll();
  }

  // // Simulate GET /books/:id
  // getById(id: number): Paciente {
  //   return this.pacientes
  //     .filter(paciente => paciente.id === id)
  //     .pop();
  // }

  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }

}
