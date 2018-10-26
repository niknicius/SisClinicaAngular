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

  private paciente: Paciente;
  private id: number;

  constructor(private router: Router, private route: ActivatedRoute, private pacienteService: PacienteService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.pacienteService.getById(id).subscribe((paciente: any) => {
          if (paciente) {
            this.paciente = paciente;
            this.id = id;
          } else {
            console.log(`Paciente with id '${id}' not found, returning to list`);
          }
        });
      };
    });
  }

  onSubmit(form: any){
    this.paciente.nome = form.nome;
    this.pacienteService.update(this.paciente, this.id).subscribe((result) => {
      console.log(result);
    });
  }

}
