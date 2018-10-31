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

  private id: number;
  private id2: number;
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.id2 = params['id2'];
    });

  }


  onSubmit(id: number,form: any) {

    this.exameService.add(this.id, JSON.stringify(new Exame(form.dataExame, form.valor, form.dataResultado)))
      .subscribe((result) => {
      console.log(result);
      alert('Exame cadastrado!');
    this.router.navigate(['/pacientes/'+this.id+'/exames/',result['id2']]);
    },
    error => {alert('Um erro aconteceu, tente novamente');})

  }

}
