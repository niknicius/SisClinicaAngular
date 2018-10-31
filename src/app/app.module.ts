import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';


import { routes } from './routes';
import { ListPacientesComponent } from './paciente/list-pacientes/list-pacientes.component';
import { NewPacienteComponent } from './paciente/new-paciente/new-paciente.component';
import { PacienteService } from './paciente/paciente.service';
import { ShowPacienteComponent } from './paciente/show-paciente/show-paciente.component';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { EditPacienteComponent } from './paciente/edit-paciente/edit-paciente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { ListMedicosComponent } from './medicos/list-medicos/list-medicos.component';
import { ShowMedicoComponent } from './medicos/show-medico/show-medico.component';
import { NewMedicoComponent } from './medicos/new-medico/new-medico.component';
import { EditMedicoComponent } from './medicos/edit-medico/edit-medico.component';
import { MedicoService } from './medicos/medico.service';
import { ListConsultasComponent } from './consulta/list-consultas/list-consultas.component';
import { NewConsultaComponent } from './consulta/new-consulta/new-consulta.component';
import { ShowConsultaComponent } from './consulta/show-consulta/show-consulta.component';
import { EditConsultaComponent } from './consulta/edit-consulta/edit-consulta.component';
import { ConsultaService } from './consulta/consulta.service';


@NgModule({
  declarations: [
    AppComponent,
    ListPacientesComponent,
    NewPacienteComponent,
    ShowPacienteComponent,
    EditPacienteComponent,
    DashboardComponent,
    ListMedicosComponent,
    ShowMedicoComponent,
    NewMedicoComponent,
    EditMedicoComponent,
    ListConsultasComponent,
    NewConsultaComponent,
    ShowConsultaComponent,
    EditConsultaComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService,
    PacienteService,
    ConsultaService,
    ApiService,
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
