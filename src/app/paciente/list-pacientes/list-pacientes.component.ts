import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-list-pacientes',
  templateUrl: './list-pacientes.component.html',
  styleUrls: ['./list-pacientes.component.css']
})
export class ListPacientesComponent {

  message: string;
  pacientes: Array<any>;

  constructor(
    private router: Router,
    private service: PacienteService,
    private api: ApiService) {

      this.getPacientes();
      
  }


  getPacientes(): Paciente[] {
    //console.log(this.service.getAll().length);
    return this.service.getAll();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/pacientes', id]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/pacientes', id, 'edit']);
    return false;
  }

  // destroy(id) {
  //   if (confirm('Are you sure?')) {
  //     this.service.delete(+id);
  //     this.service.changeMessage(`Book was successfully destroyed.`);
  //   }
  //   return false;
  // }

}
