// Naudojant ES6 klases sukurkite objekto Filmas (Movie) kūrimo konstruktorių, kuris turės šias savybes:
//
//
//
//     1. name; 2. year; 3. director; 4. budget; 5. income.
//
//     ir metodus:
//
//     1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director);
//
// 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.
//
//
//
//     Testavimui, sukurkite du filmus, kurie turės nurodytas savybes ir metodus.

class Movie {
    constructor(name, year, director, budget, income) {
        this.name = name;
        this.year = year;
        this.director = director;
        this.budget = budget;
        this.income = income;
    }
    getIntroduction() {
        return `${this.name} year ${this.year} by ${this.director}`;
    }
    getProfit() {
        return `'$'${this.income - this.budget}`;
    }
}