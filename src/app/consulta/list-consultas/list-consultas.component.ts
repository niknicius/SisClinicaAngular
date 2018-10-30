import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { ConsultaService } from '../consulta.service';
import { Consulta } from '../consulta';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-list-consultas',
  templateUrl: './list-consultas.component.html',
  styleUrls: ['./list-consultas.component.css']
})
export class ListConsultasComponent implements OnInit {

  message: string;
  consultas: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ConsultaService,
    private api: ApiService) {
  }

  ngOnInit(){

    this.service.getAll().subscribe(dataConsulta => {
      this.consultas = dataConsulta;});

  }

  getConsultas() {
    this.consultas = this.service.getAll();
  }

  reload(){
    alert('Apagado com sucesso!');
    window.location.reload();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/consultas', id]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/consultas/edit/', id]);
    return false;
  }

  destroy(id) {
    if (confirm('Tem certeza?')) {
      this.service.delete(+id);
      this.service.changeMessage('Consulta foi apagada');
      this.reload();
    }
    return false;
  }

}
