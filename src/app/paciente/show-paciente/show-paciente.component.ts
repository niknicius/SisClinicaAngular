import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-show-paciente',
  templateUrl: './show-paciente.component.html',
  styleUrls: ['./show-paciente.component.css']
})
export class ShowPacienteComponent{

  public paciente: Paciente;
  public pacientes: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacientes = this.pacienteService.getAll();
    console.log(this.pacientes.length);
  }

  // loadPaciente(id: number): Promise<Paciente> {
  //   return new Promise( (resolve) => resolve(this.pacienteService.getById(id)) );
  // }

  back() {
    this.router.navigate(['/pacientes']);
    this.pacienteService.clearMessage();
    return false;
  }

  // edit() {
  //   this.pacienteService.clearMessage();
  //   this.router.navigate(['/pacientes', this.paciente.id, 'edit']);
  //   return false;
  // }
}
