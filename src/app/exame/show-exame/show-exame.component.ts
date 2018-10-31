import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Exame } from '../exame';
import { ExameService } from '../exame.service';

@Component({
  selector: 'app-show-exame',
  templateUrl: './show-exame.component.html',
  styleUrls: ['./show-exame.component.css']
})
export class ShowExameComponent implements OnInit {

  public exame: any = {};
  public id: number;
  public id2: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exameService: ExameService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id2 = params['id2'];
      this.id = params['id'];

      if (this.id2) {
        this.exameService.getById(this.id2).subscribe((exame: any) => {
          if (exame) {
            this.exame = exame;
            this.id = this.id2;
          } else {
            alert('Exame não encontrado!');
            this.router.navigate(['/pacientes/'+this.id+'/exames']);
          }
        });
      };
  });
}
edit(){
  this.router.navigate(['/pacientes/'+this.id+'/exames/edit/', this.id2]);
  return false;
}

}
