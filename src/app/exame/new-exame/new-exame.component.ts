///<reference path="../exame.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExameService } from '../exame.service';
import { Exame } from '../exame';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-new-exame',
  templateUrl: './new-exame.component.html',
  styleUrls: ['./new-exame.component.css']
})

export class NewExameComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router, private exameService: ExameService, private apiService: ApiService) {}

  id: number = 0;
  

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.id = params['id'];
  });};


  onSubmit(form: any) {

    this.exameService.add(JSON.stringify(new Exame(this.id,form.dataExame,form.valor,
      form.dataResultado)), this.id)
      .subscribe((result) => {
      console.log(result);
      alert('Exame cadastrado!');
      this.router.navigate(['pacientes/' + result['idPaciente'] + '/exames/' + result['id']]);
    },
    error => {alert('Um erro aconteceu, tente novamente');},)

  }

}
