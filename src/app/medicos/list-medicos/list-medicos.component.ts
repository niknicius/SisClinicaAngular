import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Medico} from '../medico';
import { ApiService} from 'app/api.service';

@Component({
  selector: 'app-list-medicos',
  templateUrl: './list-medicos.component.html',
  styleUrls: ['./list-medicos.component.css']
})

export class ListMedicosComponent implements OnInit{
  
  message:string;
  medicos: Array<any> = [];

  constructor(
    private service: MedicoService,
     private router: Router,
     private route: ActivatedRoute,
     private api: ApiService) { }
  
  ngOnInit() {

    this.service.getAll().subscribe(data =>{
      this.medicos = data;})
  
    }
  getMedicos() {
    this.medicos = this.service.getAll();
  }

  show(id){
    this.service.clearMessage();
    this.router.navigate(['/medicos', id]);
    return false;
  }

  edit(id){
    this.service.clearMessage();
    this.router.navigate(['/medicos', 'edit', id]);
    return false;
  }

  reload(){
    alert('Apagado com sucesso!');
    window.location.reload();
  }
  destroy(id){
    if(confirm('Tem certeza que deseja deletar esse Medico?')){
      this.service.delete(+id);
      this.service.changeMessage('Médico foi deletado com sucesso!');
      this.reload();
    }
    return false;
  }
}