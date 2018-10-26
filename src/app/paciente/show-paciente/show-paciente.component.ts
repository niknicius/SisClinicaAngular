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
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
          }
        });
      };
  });

}
}
