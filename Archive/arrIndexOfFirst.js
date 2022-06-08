// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu
// nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

let numbers4 = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

function arrIndexOfFirst(numbers4, x){
    for (let i = 0; i < numbers4.length; i++) {
        if (numbers4[i] == x){
            return i;
        }
    }
    return -1;
}

console.log(arrIndexOfFirst(numbers4, 10));