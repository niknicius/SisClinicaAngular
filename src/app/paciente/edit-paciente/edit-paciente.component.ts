import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {

  private paciente: Paciente = null;
  private id: number;
  private sexo: any;
  private tipoConsulta: any;

  constructor(private router: Router, private route: ActivatedRoute, private pacienteService: PacienteService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.pacienteService.getById(id).subscribe((paciente: any) => {
          if (paciente) {
            this.paciente = paciente;
            this.id = id;
            if (paciente.sexo == 'masculino'){
              this.sexo = 1;
            }
            else if (paciente.sexo == 'feminino'){
              this.sexo = 2;
            }
            else {
              this.sexo = 0;
            }

            if(paciente.tipoConsulta == 'normal'){
              this.tipoConsulta = 1;
            }
            else if (paciente.tipoConsulta == 'retorno'){
              this.tipoConsulta = 2;
            }
            else {
              this.tipoConsulta = 0;
            }
          } else {
            console.log(`Paciente with id '${id}' not found, returning to list`);
            this.router.navigate(['/pacientes']);
          }
        });
      };
    });
  }

  onSubmit(form: any){
    this.paciente.nome = form.nome;
    this.paciente.raca = form.raca;
    this.paciente.dataNascimento = form.dataNascimento;
    this.paciente.cpf = form.cpf;
    this.paciente.rg = form.rg;
    this.paciente.sexo = form.sexo;
    this.paciente.nacionalidade = form.nacionalidade;
    this.paciente.cep = form.cep;
    this.paciente.uf = form.uf;
    this.paciente.tipoConsulta = form.tipoConsulta;
    this.pacienteService.update(this.paciente, this.id).subscribe((result) => {
      console.log(result);
      alert('Paciente atualizado!');
      this.router.navigate(['/pacientes/',result['id']]);
    }, error => { alert('Um erro aconteceu, tente novamente!'); });
  }

}
