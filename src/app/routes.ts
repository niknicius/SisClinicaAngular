import { Routes } from '@angular/router';

import { ListPacientesComponent } from './paciente/list-pacientes/list-pacientes.component';
import { NewPacienteComponent } from './paciente/new-paciente/new-paciente.component';
import { ShowPacienteComponent } from './paciente/show-paciente/show-paciente.component';
import { EditPacienteComponent } from './paciente/edit-paciente/edit-paciente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListMedicosComponent } from './medicos/list-medicos/list-medicos.component';
import { NewMedicoComponent } from './medicos/new-medico/new-medico.component';
import { ShowMedicoComponent } from './medicos/show-medico/show-medico.component';
import { EditMedicoComponent } from './medicos/edit-medico/edit-medico.component';
import { EditConsultaComponent } from './consulta/edit-consulta/edit-consulta.component';
import { ListConsultasComponent } from './consulta/list-consultas/list-consultas.component';
import { NewConsultaComponent } from './consulta/new-consulta/new-consulta.component';
import { ShowConsultaComponent } from './consulta/show-consulta/show-consulta.component';
import { ListExamesComponent } from './exame/list-exames/list-exames.component';
import { NewExameComponent } from './exame/new-exame/new-exame.component';
import { ShowExameComponent } from './exame/show-exame/show-exame.component';
import { EditExameComponent } from './exame/edit-exame/edit-exame.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'pacientes' , component: ListPacientesComponent},
  { path: 'pacientes/new', component: NewPacienteComponent},
  { path: 'pacientes/:id', component: ShowPacienteComponent},
  { path: 'pacientes/edit/:id', component: EditPacienteComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'medicos', component: ListMedicosComponent },
  { path: 'medicos/new', component: NewMedicoComponent },
  { path: 'medicos/:id', component: ShowMedicoComponent},
  {path: 'medicos/edit/:id', component: EditMedicoComponent},
  { path: 'pacientes/:id/consultas' , component: ListConsultasComponent},
  { path: 'pacientes/:id/consultas/new', component: NewConsultaComponent},
  { path: 'pacientes/:id/consultas/:id', component: ShowConsultaComponent},
  { path: 'pacientes/:id/consultas/edit/:id', component: EditConsultaComponent},
  { path: 'dashboard', component: DashboardComponent}
  { path: 'consultas' , component: ListConsultasComponent},
  { path: 'consultas/new', component: NewConsultaComponent},
  { path: 'consultas/:id', component: ShowConsultaComponent},
  { path: 'consultas/edit/:id', component: EditConsultaComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'pacientes/:id/exames' , component: ListExamesComponent},
  { path: 'pacientes/:id/exames/new', component: NewExameComponent},
  { path: 'pacientes/:id/exames/:id2', component: ShowExameComponent},
  { path: 'pacientes/:id/exames/edit/:id2', component: EditExameComponent}


];
