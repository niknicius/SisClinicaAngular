import { Injectable } from '@angular/core';
import { Medico } from './medico';
import {AppService} from '../app.service';
import { Subject } from 'rxjs/Subject';
import {ApiService } from '../api.service';
import {RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class MedicoService {

  constructor(private appService: AppService, private apiService: ApiService) {}

  
  add(medico): any {
    return this.apiService.post('medicos', medico);
    //if (!medico.id) {
    //  medico.id = ++this.lastId;
    //}
    //this.medicos.push(medico);
  }

  
  delete(id: number): any {
    console.log('delete service');
    return this.apiService.delete('medicos/', id);
  }

  
  update(newMedico: Medico, id: number) {
    return this.apiService.put('medicos/' + id, newMedico);
  }

  
  getAll(): any {
    return this.apiService.getAll('medicos');
  }

  
  getById(id: any): Observable<any> {

    return this.apiService.getById('medicos', id);

    //return this.medicos
    //  .filter(todo => todo.id === id)
    //  .pop();
  }
  
  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }
}