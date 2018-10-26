import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppService } from './app.service';
import { BookService } from './book/book.service';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { ListBooksComponent } from './book/list-books/list-books.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { ShowBookComponent } from './book/show-book/show-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListBooksComponent,
        NewBookComponent,
        ShowBookComponent,
        EditBookComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        BookService,
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
