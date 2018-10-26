import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Paciente } from './paciente';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class PacienteService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for book's
  pacientes: Array<any>;

  pacienteJ: any = {
    nome: 'a'
  }

  constructor(private appService: AppService, private apiService: ApiService) {}

  ngOnInit() {
    console.log('as');
    this.apiService.getAll().subscribe(data => {
      this.pacientes = data;
    });
  }

  // Simulate POST /books
  add(pacientej): any {
    // if (!paciente.id) {
    //   paciente.id = ++this.lastId;
    // }
    
    return this.apiService.apiPost(pacientej);
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }


  // // Simulate DELETE /books/:id
  // delete(id: number) {
  //   this.pacientes = this.pacientes
  //     .filter(paciente => paciente.id !== id);
  // }

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
  getAll(): Paciente[] {
    this.apiService.getAll().subscribe(data => {
      this.pacientes = data; });
      console.log(this.pacientes);
    return this.pacientes;
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
