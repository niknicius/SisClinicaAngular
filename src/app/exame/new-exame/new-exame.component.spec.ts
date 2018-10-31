import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { routes } from '../../routes';
import { AppService } from '../../app.service';
import { NewExameComponent } from './new-exame.component';
import { ListExamesComponent } from '../list-exames/list-exames.component';
import { ExameService } from '../exame.service';
import { ShowExameComponent } from '../show-exame/show-exame.component';
import { EditExameComponent } from '../edit-exame/edit-exame.component';


describe('NewExameComponent', () => {
  let component: NewExameComponent;
  let fixture: ComponentFixture<NewExameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewExameComponent,
        ListExamesComponent,
        ShowExameComponent,
        EditExameComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        ExameService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an empty form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#exame_dataExame').value).toBe('', ' exame dataExame input value should be empty');
    expect(compiled.querySelector('#exame_valor').value).toBe('', ' exame valor input value should be empty');
    expect(compiled.querySelector('#exame_dataResultado').value).toBe('', ' exame dataResultado input value should be empty');

    expect(compiled.querySelector('#create_exame_button').value).toContain('Create Exame');
  });
});
