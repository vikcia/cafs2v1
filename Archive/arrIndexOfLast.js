// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto,
// argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

let numbers5 = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

function arrIndexOfLast(numbers5, num){
    return numbers5.lastIndexOf(num);{
    }
    return -1;
}

console.log("arrIndexOfLast", arrIndexOfLast(numbers5, 2));
console.log("arrIndexOfLast", arrIndexOfLast(numbers5, 10));