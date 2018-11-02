import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { Consulta } from '../consulta';

@Component({
  selector: 'app-edit-consulta',
  templateUrl: './edit-consulta.component.html',
  styleUrls: ['./edit-consulta.component.css']
})
export class EditConsultaComponent implements OnInit {

  private consulta: Consulta = null;
  private id: number;
  private tipoConsulta: any;

  constructor(private router: Router, private route: ActivatedRoute, private consultaService: ConsultaService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.consultaService.getById(id).subscribe((consulta: any) => {
          if (consulta) {
            this.consulta = consulta;
            this.id = id;

            if(consulta.paciente.tipoConsulta == 'normal'){
              this.tipoConsulta = 1;
            }
            else if (consulta.paciente.tipoConsulta == 'retorno'){
              this.tipoConsulta = 2;
            }
            else {
              this.tipoConsulta = 0;
            }
          } else {
            console.log(`Consulta with id '${id}' not found, returning to list`);
            this.router.navigate(['/consultas']);
          }
        });
      };
    });
  }

  onSubmit(form: any){
    this.consulta.idMedico = form.medico;
    this.consulta.idPaciente = form.paciente;
    this.consulta.dataRetorno = form.dataRetorno;
    this.consulta.dataConsulta = form.dataConsulta;
    this.consultaService.update(this.consulta, this.id).subscribe((result) => {
      console.log(result);
      alert('Consulta atualizada!');
      this.router.navigate(['/consultas/',result['id']]);
    }, error => { alert('Um erro aconteceu, tente novamente!'); });
  }

}
