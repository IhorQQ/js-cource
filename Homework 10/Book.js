class Book {
    constructor(name, author, year ) {
        this.name = name;
        this.author = author;
        this.year = year;
    }


    set name (value) {
        if (typeof value !== 'string' || !value) {
            throw new Error ('Name should be non-empty string')
        }
        this._name = value;
    }
    get name () {
        return this._name;
    }

    set author (value) {
        if (typeof value !== 'string' || !value) {
            throw new Error ('Author should be non-empty string')
        }
        this._author = value;
    }
    get author () {
        return this._author;
    }


    set year (value) {
        if (value <= 0 || typeof value !== 'number') {
            throw new Error('year should be number above 0')
        }
        this._year = value;
    }
    get year () {
        return this._year;
    }


    printInfo() {
        console.log(`Book name: ${this.name}, Author: ${this.author}, Year: ${this.year}`);
    }

    static oldestBook(books) {
        return books.reduce((oldest, current) =>
            (current.year < oldest.year) ? current : oldest
        )
    }
}

export default Book;


