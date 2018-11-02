import { Component, OnInit } from '@angular/core';
import { Medico } from '../medico';
import { MedicoService } from '../medico.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-medico',
  templateUrl: './show-medico.component.html',
  styleUrls: ['./show-medico.component.css']
})
export class ShowMedicoComponent implements OnInit {

  public medico: any = {};
  public id: number;

  constructor(
    private route: ActivatedRoute,
    private medicoService: MedicoService,
    private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          this.medicoService.getById(id).subscribe((medico: any) => {
            if (medico) {
              this.medico = medico;
              this.id = id;
            } else {
              alert('Medico não encontrado!');
              this.router.navigate(['/medicos']);
            }
          }, error => { alert("Um erro aconteceu: " + error.error.message); this.router.navigate(['/medicos']); } );
        };
    });
  }

  edit(){
    this.router.navigate(['/medicos/edit/', this.id]);
    return false;
    }

  back(){
      this.router.navigate(['/medicos']);
      return false;
      }  

}
