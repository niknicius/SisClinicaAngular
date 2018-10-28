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
  private sexo: any;
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
            if (consulta.paciente.sexo == 'masculino'){
              this.sexo = 1;
            }
            else if (consulta.paciente.sexo == 'feminino'){
              this.sexo = 2;
            }
            else {
              this.sexo = 0;
            }

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
    this.consulta.paciente.nome = form.nome;
    this.consulta.paciente.raca = form.raca;
    this.consulta.paciente.dataNascimento = form.dataNascimento;
    this.consulta.paciente.cpf = form.cpf;
    this.consulta.paciente.rg = form.rg;
    this.consulta.paciente.sexo = form.sexo;
    this.consulta.paciente.nacionalidade = form.nacionalidade;
    this.consulta.paciente.cep = form.cep;
    this.consulta.paciente.uf = form.uf;
    this.consulta.paciente.tipoConsulta = form.tipoConsulta;
    this.consultaService.update(this.consulta, this.id).subscribe((result) => {
      console.log(result);
      alert('Consulta atualizada!');
      this.router.navigate(['/consultas/',result['id']]);
    }, error => { alert('Um erro aconteceu, tente novamente!'); });
  }

}
