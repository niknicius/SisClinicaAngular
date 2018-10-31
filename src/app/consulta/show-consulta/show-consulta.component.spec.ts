import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShowConsultaComponent } from './show-consulta.component';
import { NewConsultaComponent } from '../new-consulta/new-consulta.component';
/* import { ListConsultasComponent } from '../list-consulta/list-consulta.component'; */
import { routes } from '../../routes';
import { ConsultaService } from '../consulta.service';
import { EditConsultaComponent } from '../edit-consulta/edit-consulta.component';
import { AppService } from '../../app.service';

describe('ShowConsultaComponent', () => {
  let component: ShowConsultaComponent;
  let fixture: ComponentFixture<ShowConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewConsultaComponent,
        ShowConsultaComponent,
        EditConsultaComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        ConsultaService
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
