// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir
// grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

// let numbers2 = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
//
// // let arrMultiplied = numbers2.map(function(x, y) { return x * y; });
//
// let arrMultiplied = numbers2.map((x,y) => x * y);
//
// console.log(arrMultiplied(numbers2, 3));
//
let numbers2 = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

let arrMultiplied = numbers2.map(function(x, y) {
return x * y; });

// let arrMultiplied = numbers2.map(x, y => x * y);

console.log(arrMultiplied(x, 3));