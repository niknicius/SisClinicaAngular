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

describe('ShowBookComponent', () => {
  let component: ShowPacienteComponent;
  let fixture: ComponentFixture<ShowPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewPacienteComponent,
        ShowPacienteComponent,
        ListPacientesComponent,
        EditPacienteComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        PacienteService
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
