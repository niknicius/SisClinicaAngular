import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { EditExameComponent } from './edit-exame.component';
import { ExameService } from '../exame.service';
import { AppService } from 'app/app.service';
import { routes } from 'app/routes';
import { ShowExameComponent } from '../show-exame/show-exame.component';
import { NewExameComponent } from '../new-exame/new-exame.component';
import { ListExamesComponent } from '../list-exames/list-exames.component';



describe('EditBookComponent', () => {
  let component: EditExameComponent;
  let fixture: ComponentFixture<EditExameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditExameComponent,
        ListExamesComponent,
        NewExameComponent,
        ShowExameComponent
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
    fixture = TestBed.createComponent(EditExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
