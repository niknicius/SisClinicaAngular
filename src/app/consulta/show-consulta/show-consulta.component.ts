import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ConsultaService } from '../consulta.service';
import { Consulta } from '../consulta';

@Component({
  selector: 'app-show-consulta',
  templateUrl: './show-consulta.component.html',
  styleUrls: ['./show-consulta.component.css']
})
export class ShowConsultaComponent implements OnInit{

  public consulta: any = {};
  public id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultaService: ConsultaService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.consultaService.getById(id).subscribe((consulta: any) => {
          if (consulta) {
            this.consulta = consulta;
            this.id = id;
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
