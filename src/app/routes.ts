import { Routes } from '@angular/router';

import { ListPacientesComponent } from './paciente/list-pacientes/list-pacientes.component';
import { NewPacienteComponent } from './paciente/new-paciente/new-paciente.component';
import { ShowPacienteComponent } from './paciente/show-paciente/show-paciente.component';
import { EditPacienteComponent } from './paciente/edit-paciente/edit-paciente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditConsultaComponent } from './consulta/edit-consulta/edit-consulta.component';
import { ListConsultasComponent } from './consulta/list-consultas/list-consultas.component';
import { NewConsultaComponent } from './consulta/new-consulta/new-consulta.component';
import { ShowConsultaComponent } from './consulta/show-consulta/show-consulta.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'pacientes' , component: ListPacientesComponent},
  { path: 'pacientes/new', component: NewPacienteComponent},
  { path: 'pacientes/:id', component: ShowPacienteComponent},
  { path: 'pacientes/edit/:id', component: EditPacienteComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'consultas' , component: ListConsultasComponent},
  { path: 'consultas/new', component: NewConsultaComponent},
  { path: 'consultas/:id', component: ShowConsultaComponent},
  { path: 'consultas/edit/:id', component: EditConsultaComponent},
  { path: 'dashboard', component: DashboardComponent}

];
