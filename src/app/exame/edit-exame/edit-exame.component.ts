import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExameService } from '../exame.service';
import { Exame } from '../exame';


@Component({
  selector: 'app-edit-exame',
  templateUrl: './edit-exame.component.html',
  styleUrls: ['./edit-exame.component.css']
})
export class EditExameComponent implements OnInit {

  private exame: Exame = null;
  private id: number;
  private id2: number;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exameService: ExameService) {}

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        this.id2 = params['id2'];
      });
  
    }
  loadExame(id: number){
    return this.exameService.getById(id);
  }

  onSubmit(form: any) {
    this.exame.dataExame = form.dataExame;
    this.exame.valor = form.valor;
    this.exame.dataResultado = form.dataResultado;
    this.exameService.update(this.exame, this.id, this.id2).subscribe((result) => {
      console.log(result);
      alert('Paciente atualizado!');
      this.router.navigate(['/pacientes/'+this.id+'/exames/',result['id2']]);
    }, error => { alert('Um erro aconteceu, tente novamente!'); });
  
    this.exameService.changeMessage(`Exame was successfully updated.`);
    this.router.navigate(['/pacientes/'+this.id+'/exames', this.id2]);
  }

  show() {
    this.exameService.clearMessage();
    this.router.navigate(['/pacientes/'+this.id+'/exames', this.id2]);
    return false;
  }

  edit(id) {
    this.exameService.clearMessage();
    this.router.navigate(['/pacientes/'+this.id+'/exames/edit/', id]);
    return false;
  }

  back() {
    this.exameService.clearMessage();
    this.router.navigate(['/pacientes/'+this.id+'/exames']);
    return false;
  }
}