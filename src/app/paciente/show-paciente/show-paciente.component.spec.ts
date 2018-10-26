import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShowBookComponent } from './show-book.component';
import { NewBookComponent } from '../new-book/new-book.component';
import { ListBooksComponent } from '../list-books/list-books.component';
import { routes } from '../../routes';
import { BookService } from '../book.service';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { AppService } from '../../app.service';

describe('ShowBookComponent', () => {
  let component: ShowBookComponent;
  let fixture: ComponentFixture<ShowBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewBookComponent,
        ShowBookComponent,
        ListBooksComponent,
        EditBookComponent
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
    fixture = TestBed.createComponent(ShowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
