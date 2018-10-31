///<reference path="../../../../node_modules/@angular/core/testing/src/test_bed.d.ts"/>
///<reference path="list-exames.component.ts"/>
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExameService } from '../exame.service';
import { routes } from '../../routes';
import { ListExamesComponent } from './list-exames.component';
import { NewExameComponent } from '../new-exame/new-exame.component';
import { AppService } from 'app/app.service';
import { ShowExameComponent } from '../show-exame/show-exame.component';
import { EditExameComponent } from '../edit-exame/edit-exame.component';

describe('ListExamesComponent', () => {
  let component: ListExamesComponent;
  let fixture: ComponentFixture<ListExamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:
        [
          ListExamesComponent,
          NewExameComponent,
          ShowExameComponent,
          EditExameComponent
        ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        ExameService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render table headers', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#dataExameHeader').textContent).toContain('dataExame');
    expect(compiled.querySelector('#valorHeader').textContent).toContain('valor');
    expect(compiled.querySelector('#dataResultadoHeader').textContent).toContain('dataResultado');


  });
});
