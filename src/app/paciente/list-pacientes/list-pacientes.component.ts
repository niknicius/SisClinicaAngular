import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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
  pacientes: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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

  reload(){
    alert('Apagado com sucesso!');
    window.location.reload();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/pacientes', id]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/pacientes/edit/', id]);
    return false;
  }

  destroy(id) {
    if (confirm('Tem certeza?')) {
      this.service.delete(+id);
      this.service.changeMessage('Paciente foi deletado');
      this.reload();
    }
    return false;
  }

}
