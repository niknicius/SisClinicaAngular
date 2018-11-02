import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShowConsultaComponent } from './show-consulta.component';
import { NewConsultaComponent } from '../new-consulta/new-consulta.component';
import { ListConsultasComponent } from '../list-consultas/list-consultas.component';
import { routes } from '../../routes';
import { ConsultaService } from '../consulta.service';
import { EditConsultaComponent } from '../edit-consulta/edit-consulta.component';
import { AppService } from '../../app.service';
import { ListPacientesComponent } from 'app/paciente/list-pacientes/list-pacientes.component';
import { NewPacienteComponent } from 'app/paciente/new-paciente/new-paciente.component';
import { ShowPacienteComponent } from 'app/paciente/show-paciente/show-paciente.component';
import { EditPacienteComponent } from 'app/paciente/edit-paciente/edit-paciente.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ListMedicosComponent } from 'app/medicos/list-medicos/list-medicos.component';
import { ShowMedicoComponent } from 'app/medicos/show-medico/show-medico.component';
import { NewMedicoComponent } from 'app/medicos/new-medico/new-medico.component';
import { EditMedicoComponent } from 'app/medicos/edit-medico/edit-medico.component';
import { EditExameComponent } from 'app/exame/edit-exame/edit-exame.component';
import { ShowExameComponent } from 'app/exame/show-exame/show-exame.component';
import { NewExameComponent } from 'app/exame/new-exame/new-exame.component';
import { ListExamesComponent } from 'app/exame/list-exames/list-exames.component';
import { MedicoService } from 'app/medicos/medico.service';
import { ExameService } from 'app/exame/exame.service';
import { PacienteService } from 'app/paciente/paciente.service';


describe('ShowConsultaComponent', () => {
  let component: ShowConsultaComponent;
  let fixture: ComponentFixture<ShowConsultaComponent>;

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
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        ConsultaService,
        MedicoService,
        ExameService,
        PacienteService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
