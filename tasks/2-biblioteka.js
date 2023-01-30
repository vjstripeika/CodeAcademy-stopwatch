/**
 * Knyga turi savybes:
 * pavadinimas (string),
 * autorius (string),
 * puslapiu skaicius (number),
 * metai (number),
 * leidykla (string).
 */

class Book {
  constructor(name, author, pageNumber, year, publisher) {
    // pavadinimas (string),
    this.name = name;
    // autorius (string),
    this.author = author;
    // puslapiu skaicius (number),
    this.pageNumber = pageNumber;
    // metai (number),
    this.year = year;
    // leidykla (string).
    this.publisher = publisher;
  }
}

/**
 * Biblioteka turi savybes: pavadinimas (string), adresas (string), knygos (array).
 */

class Library {
  // kai nurodome argumentuose "argName = <reiksme>", jam nurodome numatytąją "default" reikšmę
  constructor(name, address, books = []) {
    this.name = name;
    this.address = address;
    this.books = [...books];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    /**
     * books - [hemingway, herber4]
     * book - herbert4
     * result - [hemingway]
     */
    const result = [];

    for (let listBook of this.books) {
      if (listBook.name !== book.name) {
        result.push(listBook);
      }
    }

    this.books = result;
  }

  bookCount() {
    return this.books.length;
  }

  bookList() {
    return this.books;
  }

  bookListByAuthor(author /* string */) {
    // grazinti sarasa, kur autorius === book.author

    const result = [];

    for (let book of this.books) {
      if (book.author === author) {
        result.push(book);
      }
    }

    return result;
  }
}

const hemingway = new Book(
  "For Whom the Bell Tolls",
  "Ernest Hemingway",
  350,
  1940,
  "Charles Scribner's Sons"
);
console.log(hemingway);
const tolkien = new Book(
  "The Lord of the Rings",
  "J. R. R. Tolkien",
  1216,
  1954,
  "Allen & Unwin"
);
console.log(tolkien);
const tolkien2 = new Book(
  "The Hobbit",
  "J. R. R. Tolkien",
  310,
  1937,
  "Allen & Unwin"
);
const tolkien3 = new Book(
  "The Silmarillion",
  "J. R. R. Tolkien",
  400,
  1977,
  "Allen & Unwin"
);
const orwell = new Book("1984", "George Orwell", 328, 1949, "Secker & Warburg");
const orwell2 = new Book(
  "Animal Farm",
  "George Orwell",
  112,
  1945,
  "Secker & Warburg"
);
const remarque = new Book(
  "All Quiet on the Western Front",
  "Erich Maria Remarque",
  352,
  1929,
  "Harcourt, Brace and Company"
);
const remarque2 = new Book(
  "Three Comrades",
  "Erich Maria Remarque",
  320,
  1936,
  "Harcourt, Brace and Company"
);
const remarque3 = new Book(
  "Arch of Triumph",
  "Erich Maria Remarque",
  320,
  1945,
  "Harcourt, Brace and Company"
);
const remarque4 = new Book(
  "The Road Back",
  "Erich Maria Remarque",
  320,
  1954,
  "Harcourt, Brace and Company"
);
const herbert = new Book("Dune", "Frank Herbert", 604, 1965, "Chilton Books");
const herbert2 = new Book(
  "Dune Messiah",
  "Frank Herbert",
  512,
  1969,
  "Chilton Books"
);
const herbert3 = new Book(
  "Children of Dune",
  "Frank Herbert",
  512,
  1976,
  "Chilton Books"
);
const herbert4 = new Book(
  "God Emperor of Dune",
  "Frank Herbert",
  512,
  1981,
  "Chilton Books"
);
const initialBooks = [herbert4];

const vilniausBiblioteka = new Library(
  "Martyno Mažvydo biblioteka",
  "kažkokia g.",
  initialBooks
);

vilniausBiblioteka.addBook(hemingway);
vilniausBiblioteka.addBook(herbert3);
vilniausBiblioteka.addBook(herbert2);
vilniausBiblioteka.addBook(herbert);

console.log(vilniausBiblioteka.bookCount(), vilniausBiblioteka.bookList());

const list = vilniausBiblioteka.bookListByAuthor("Frank Herbert");
console.log("LIST", list);
