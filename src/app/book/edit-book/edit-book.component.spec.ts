import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { EditBookComponent } from './edit-book.component';
import { routes } from '../../routes';
import { BookService } from '../book.service';
import { ListBooksComponent } from '../list-books/list-books.component';
import { NewBookComponent } from '../new-book/new-book.component';
import { ShowBookComponent } from '../show-book/show-book.component';
import { AppService } from '../../app.service';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditBookComponent,
        ListBooksComponent,
        NewBookComponent,
        ShowBookComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        BookService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
