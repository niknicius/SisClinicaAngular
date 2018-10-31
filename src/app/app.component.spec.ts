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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListPacientesComponent,
        NewPacienteComponent,
        EditPacienteComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        PacienteService,
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
