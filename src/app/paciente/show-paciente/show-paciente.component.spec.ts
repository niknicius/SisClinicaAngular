import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShowPacienteComponent } from './show-paciente.component';
import { NewPacienteComponent } from '../new-paciente/new-paciente.component';
import { ListPacientesComponent } from '../list-pacientes/list-pacientes.component';
import { routes } from '../../routes';
import { PacienteService } from '../paciente.service';
import { EditPacienteComponent } from '../edit-paciente/edit-paciente.component';
import { AppService } from '../../app.service';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ListMedicosComponent } from 'app/medicos/list-medicos/list-medicos.component';
import { ShowMedicoComponent } from 'app/medicos/show-medico/show-medico.component';
import { NewMedicoComponent } from 'app/medicos/new-medico/new-medico.component';
import { EditMedicoComponent } from 'app/medicos/edit-medico/edit-medico.component';
import { EditExameComponent } from 'app/exame/edit-exame/edit-exame.component';
import { ShowExameComponent } from 'app/exame/show-exame/show-exame.component';
import { NewExameComponent } from 'app/exame/new-exame/new-exame.component';
import { ListExamesComponent } from 'app/exame/list-exames/list-exames.component';
import { ListConsultasComponent } from 'app/consulta/list-consultas/list-consultas.component';
import { EditConsultaComponent } from 'app/consulta/edit-consulta/edit-consulta.component';
import { NewConsultaComponent } from 'app/consulta/new-consulta/new-consulta.component';
import { ShowConsultaComponent } from 'app/consulta/show-consulta/show-consulta.component';
import { ApiService } from 'app/api.service';

describe('ShowPacienteComponent', () => {
  let component: ShowPacienteComponent;
  let fixture: ComponentFixture<ShowPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListPacientesComponent,
        NewPacienteComponent,
        ShowPacienteComponent,
        EditPacienteComponent,
        DashboardComponent,
        ListMedicosComponent,
        ShowMedicoComponent,
        NewMedicoComponent,
        EditMedicoComponent,
        ListExamesComponent,
        NewExameComponent,
        ShowExameComponent,
        EditExameComponent,
        ListConsultasComponent,
        EditConsultaComponent,
        NewConsultaComponent,
        ShowConsultaComponent,
        DashboardComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        PacienteService,
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
