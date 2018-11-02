import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppService } from './app.service';
import { PacienteService } from './paciente/paciente.service';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { ListPacientesComponent } from './paciente/list-pacientes/list-pacientes.component';
import { NewPacienteComponent } from './paciente/new-paciente/new-paciente.component';
import { EditPacienteComponent } from './paciente/edit-paciente/edit-paciente.component';
import { ShowPacienteComponent } from './paciente/show-paciente/show-paciente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListMedicosComponent } from './medicos/list-medicos/list-medicos.component';
import { ShowMedicoComponent } from './medicos/show-medico/show-medico.component';
import { NewMedicoComponent } from './medicos/new-medico/new-medico.component';
import { EditMedicoComponent } from './medicos/edit-medico/edit-medico.component';
import { MedicoService } from './medicos/medico.service';
import { ListConsultasComponent } from './consulta/list-consultas/list-consultas.component';
import { NewConsultaComponent } from './consulta/new-consulta/new-consulta.component';
import { ShowConsultaComponent } from './consulta/show-consulta/show-consulta.component';
import { EditConsultaComponent } from './consulta/edit-consulta/edit-consulta.component';
import { EditExameComponent } from './exame/edit-exame/edit-exame.component';
import { ShowExameComponent } from './exame/show-exame/show-exame.component';
import { NewExameComponent } from './exame/new-exame/new-exame.component';
import { ListExamesComponent } from './exame/list-exames/list-exames.component';
import { ExameService } from './exame/exame.service';
import { ConsultaService } from './consulta/consulta.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    ListExamesComponent,
    NewExameComponent,
    ShowExameComponent,
    EditExameComponent,
    DashboardComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        PacienteService,
        MedicoService,
        ConsultaService,
        ExameService,
        AppService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  
});
