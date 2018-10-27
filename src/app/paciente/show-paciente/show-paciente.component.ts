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
export class ShowPacienteComponent implements OnInit{

  public paciente: any = {};
  public id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pacienteService: PacienteService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.pacienteService.getById(id).subscribe((paciente: any) => {
          if (paciente) {
            this.paciente = paciente;
            this.id = id;
          } else {
            alert('Paciente não encontrado!');
            this.router.navigate(['/pacientes']);
          }
        });
      };
  });
}
edit(){
  this.router.navigate(['/pacientes/edit/', this.id]);
  return false;
}

}
