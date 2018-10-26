import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Book } from './book';
import { AppService } from '../app.service';

@Injectable()
export class BookService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for book's
  books: Book[] = [];

  constructor(private appService: AppService) {}

  // Simulate POST /books
  add(book: Book): Book {
    if (!book.id) {
      book.id = ++this.lastId;
    }
    this.books.push(book);
    return book;
  }

  // Simulate DELETE /books/:id
  delete(id: number) {
    this.books = this.books
      .filter(todo => todo.id !== id);
  }

  // Simulate PUT /books/:id
  update(newBook: Book): Book {
    const oldBook = this.getById(newBook.id);
    if (!oldBook) {
      return;
    }
    Object.assign(oldBook, newBook);
    return oldBook;
  }

  // Simulate GET /books
  getAll(): Book[] {
    return this.books;
  }

  // Simulate GET /books/:id
  getById(id: number): Book {
    return this.books
      .filter(todo => todo.id === id)
      .pop();
  }

  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }

}
