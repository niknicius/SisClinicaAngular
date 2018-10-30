///<reference path="../medico.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from '../medico.service';
import { Medico } from '../medico';
 
@Component({
  selector: 'app-new-medico',
  templateUrl: './new-medico.component.html',
  styleUrls: ['./new-medico.component.css']
})

export class NewMedicoComponent{

  constructor(private router: Router, private medicoService: MedicoService) {}

  onSubmit(form: any) {
    this.medicoService.add(JSON.stringify(
      new Medico(form.nome, form.especializacao, form.crm, form.cpf, form.salaDeAtendimento, form.salario, form.plantao)))
      .subscribe((result) => {
        console.log(result);
        alert('Medico cadastrado!');
        this.router.navigate(['/medicos/', result['id']]);
      },
      error => {alert('Um erro aconteceu, tente novamente');})
  }

}

