import {Book} from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book(null,null)).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let book = new Book('ng-book 2', 'Nate Murray');
    expect(book.name).toEqual('ng-book 2');
    expect(book.author).toEqual('Nate Murray');
    expect(book.id).toBeUndefined();
  });
});
