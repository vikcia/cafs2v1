class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }
    nameYear() {
        return `${this.name} by ${this.author}`;
    }
    getBookOld() {
        return `${new Date().getFullYear() - this.year}`;
    }
}