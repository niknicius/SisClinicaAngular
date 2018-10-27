///<reference path="../paciente.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-new-paciente',
  templateUrl: './new-paciente.component.html',
  styleUrls: ['./new-paciente.component.css']
})
export class NewPacienteComponent implements OnInit{

  constructor(private router: Router, private pacienteService: PacienteService, private apiService: ApiService) {}

  id: number = 0;

  ngOnInit(){};

  onSubmit(form: any) {

    this.pacienteService.add(JSON.stringify(
      new Paciente(form.nome, form.raca, form.dataNascimento,
        form.cpf, form.rg, form.sexo, form.nacionalidade, form.cep, form.uf, form.tipoConsulta)))
      .subscribe((result) => {
      console.log(result);
      alert('Paciente cadastrado!');
    this.router.navigate(['/pacientes/',result['id']]);
    },
    error => {alert('Um erro aconteceu, tente novamente');})

  }

}
