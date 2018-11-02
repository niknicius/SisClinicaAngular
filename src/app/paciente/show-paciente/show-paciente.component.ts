

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PacienteService } from '../paciente.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-paciente',
  templateUrl: './show-paciente.component.html',
  styleUrls: ['./show-paciente.component.css']
})
export class ShowPacienteComponent implements OnInit{

  public paciente: any = {};
  public id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private title: Title) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.pacienteService.getById(id).subscribe((paciente: any) => {
          if (paciente) {
            this.paciente = paciente;
            this.id = id;
            this.title.setTitle('Paciente: ' + paciente.nome);
          } else {
            alert('Paciente não encontrado!');
            this.router.navigate(['/pacientes']);
          }
        }
        , error =>{ 
          if(error.error.message == "Id não encontrado!"){
            alert("Paciente não encontrado!");
            this.router.navigate(['/pacientes']);
          } 
        } );
      };
  });
}
edit(){
  this.router.navigate(['/pacientes/edit/', this.id]);
  return false;
}

exames(){
  this.router.navigate(['/pacientes/' + this.id +  '/exames']);
  return false;
}

consultas(){
  this.router.navigate(['/pacientes/' + this.id +  '/consultas']);
  return false;
}

}
