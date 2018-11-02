///<reference path="../consulta.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { Consulta } from '../consulta';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-new-consulta',
  templateUrl: './new-consulta.component.html',
  styleUrls: ['./new-consulta.component.css']
})
export class NewConsultaComponent implements OnInit{

  constructor(private router: Router, private ConsultaService: ConsultaService, private apiService: ApiService) {}

  id: number = 0;

  ngOnInit(){};

  onSubmit(form: any) {

    this.ConsultaService.add(JSON.stringify(
      new Consulta(form.paciente, form.medico, form.dataConsulta,
        form.dataRetorno, form.aberta)))
      .subscribe((result) => {
      console.log(result);
      alert('Consulta cadastrado!');
    this.router.navigate(['consultas/',result['id']]);
    },
    error => {alert('Um erro aconteceu, tente novamente');})

  }

}
