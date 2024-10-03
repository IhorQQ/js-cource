import Book from './Book.js';
import EBook from './Ebook.js';

//Creating an instance of the Book class
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('In Search of Lost Time', 'Marcel Proust', 1913);

//Using the "printInfo" method
book1.printInfo();
book2.printInfo();

//Creating an instance of the EBook class
const ebook1 = new EBook('The Hobbit', 'Tolkien', 1937, 'EPUB');
const ebook2 = new EBook('1984', 'George Orwell', 1949, 'PDF');

//Using the "printInfo" method
ebook1.printInfo();
ebook2.printInfo();

//Using Setters
book1.name = 'The Hobbit Part 1';
book2.year = 1920;
ebook2.author = 'Ihor H.';

//Using getters
console.log(`Name of book1 is set to: ${book1.name}`);
console.log(`Year of book2 is set to: ${book2.year}`);

//Using static methods
const ourOldestBookBook = Book.oldestBook([book1, book2, ebook1, ebook2]);
ourOldestBookBook.printInfo();

const eBook11 = EBook.makeElectronicFromRegularBook(ebook1, 'PDF');
eBook11.printInfo();

