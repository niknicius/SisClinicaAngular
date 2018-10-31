import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ConsultaService } from '../consulta.service';
import { PacienteService } from 'app/paciente/paciente.service';
import { MedicoService } from 'app/medicos/medico.service';


@Component({
  selector: 'app-show-consulta',
  templateUrl: './show-consulta.component.html',
  styleUrls: ['./show-consulta.component.css']
})
export class ShowConsultaComponent implements OnInit{

  public consulta: any = {};
  public id: number;
  public paciente: any;
  public medico: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultaService: ConsultaService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const id2 = params['id2'];
      if (id) {
        this.consultaService.getById(id).subscribe((consulta: any) => {
          if (consulta) {
            this.consulta = consulta;
            console.log(consulta);
            this.id = id;
            this.pacienteService.getById(id).subscribe(pacienteConsulta => {
              this.paciente = pacienteConsulta;
            });
            this.medicoService.getById(consulta.idMedico).subscribe(medicoConsulta => {
              this.medico = medicoConsulta;
            });
          } else {
            alert('Consulta não encontrado!');
            this.router.navigate(['/consultas']);
          }
        });
      };
  });
}
edit(){
  this.router.navigate(['/consultas/edit/', this.id]);
  return false;
}

}
