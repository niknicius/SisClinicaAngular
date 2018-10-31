import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExameComponent } from './show-exame.component';
import { ListExamesComponent } from '../list-exames/list-exames.component';
import { NewExameComponent } from '../new-exame/new-exame.component';
import { routes } from 'app/routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AppService } from 'app/app.service';
import { ExameService } from '../exame.service';
import { EditExameComponent } from '../edit-exame/edit-exame.component';

describe('ShowExameComponent', () => {
  let component: ShowExameComponent;
  let fixture: ComponentFixture<ShowExameComponent>;

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
    fixture = TestBed.createComponent(ShowExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
