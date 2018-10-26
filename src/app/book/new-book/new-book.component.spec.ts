import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NewBookComponent } from './new-book.component';
import { ListBooksComponent } from '../list-books/list-books.component';
import { ShowBookComponent } from '../show-book/show-book.component';
import { BookService } from '../book.service';
import { routes } from '../../routes';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { AppService } from '../../app.service';

describe('NewBookComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewBookComponent,
        ListBooksComponent,
        ShowBookComponent,
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
    fixture = TestBed.createComponent(NewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an empty form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#book_name').value).toBe('', ' Book name input value should be empty');
    expect(compiled.querySelector('#book_author').value).toBe('', ' Book author input value should be empty');
    expect(compiled.querySelector('#create_book_button').value).toContain('Create Book');
  });
});
