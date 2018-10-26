import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-list-pacientes',
  templateUrl: './list-pacientes.component.html',
  styleUrls: ['./list-pacientes.component.css']
})
export class ListPacientesComponent implements OnInit {

  message: string;
  pacientes: Array<any>;

  constructor(
    private router: Router,
    private service: PacienteService,
    private api: ApiService) {
  }

  ngOnInit(){

    this.service.getAll().subscribe(data => {
      this.pacientes = data;});

  }

  getPacientes() {
    this.pacientes = this.service.getAll();
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

  destroy(id) {
    if (confirm('Tem certeza?')) {
      console.log(this.service.delete(+id));
      this.service.changeMessage('Paciente foi deletado');
    }
    return false;
  }

}
