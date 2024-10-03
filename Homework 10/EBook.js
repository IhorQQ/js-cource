import Book from './Book.js';


class EBook extends Book {
  constructor(name, author, year, fileType) {
    super(name, author, year);
    this.fileType = fileType;
  }

  set fileType(value) {
    if (typeof value !== 'string' || !value) {
      throw new Error ('File type should be non-empty string');
    }
    this._fileType = value;
  }

  get fileType () {
    return this._fileType;
  }

  printInfo() {
    super.printInfo();
    console.log(`File Type: ${this.fileType}`);
  }

  static makeElectronicFromRegularBook (book, fileType) {
    return new EBook(book.name, book.author, book.year, fileType);
  }
}

export default EBook;

