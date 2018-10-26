import { Routes } from '@angular/router';

import { ListPacientesComponent } from './paciente/list-pacientes/list-pacientes.component';
import { NewPacienteComponent } from './paciente/new-paciente/new-paciente.component';
import { ShowPacienteComponent } from './paciente/show-paciente/show-paciente.component';
import { EditPacienteComponent } from './paciente/edit-paciente/edit-paciente.component';

export const routes: Routes = [
  { path: 'pacientes' , component: ListPacientesComponent},
  { path: 'pacientes/new', component: NewPacienteComponent},
  { path: 'pacientes/:id', component: ShowPacienteComponent},
  { path: 'pacientes/edit/:id', component: EditPacienteComponent}
];
