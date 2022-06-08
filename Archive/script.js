// Testuosime šį masyvą
// let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio
// elementai padauginti iš 2;

//
// let arrDoubled = numbers.map(x => x * 2);
//
// console.log(arrDoubled);
// -----------------------------------------
//
// let arrDoubled(x, y) = numbers.map(x => x * y);
//
// console.log(arrDoubled, y)

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

let arrMultiplied = numbers.map(function(x, y) {
    return x * y; });
console.log(arrMultiplied(x, 3));
// --------
// let arrMultiplied = numbers2.map(x, y => x * y);


// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

// function arrCountTwos(numbers){
//     let result = 0;
//
//     for (let value of numbers) {
//         // console.log("value", value);
//         if (value == 2){
//
//             result = result + 1;
//         }
//     }
//     return result;
// }
//
// console.log(arrCountTwos(numbers));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

// function arrIndexOfFirst(numbers, x){
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] == x){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(arrIndexOfFirst(numbers, 10));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

// function arrIndexOfLast(numbers, num){
//     return numbers.lastIndexOf(num);{
//     }
//     return -1;
// }
// console.log("arrIndexOfLast", arrIndexOfLast(numbers, 2));
// console.log("arrIndexOfLast", arrIndexOfLast(numbers, 10));

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

// let num = [3, 2, 2, 4, 3];
//
// function reverseNumbers(num, numRev){
//     return num.reverse(numRev);
// }
//
// console.log("reverseNumbers", reverseNumbers(num));

// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir
// suras atitinkamai mažiausią
// ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

// let test = [8,5,4,2,7,1,9];
// function numMax(test){
//   // console.log(test);
//   return Math.max(...test);
// }
// function numMin(test){
//   // console.log(test);
//   return Math.min(...test);
// }
// console.log("numMaxMin", numMin(test), numMax(test));

// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys
// (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek
// pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti
// tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
//
// const checkForLetters = function(str, char, caseInsensitive = false) {
//     let counter = 0;
//
//     if (caseInsensitive) {
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//         char = char.toLowerCase();
//         str = str.toLowerCase();
//     }
//
//     console.log({caseInsensitive, str, char});
//
//     String(str).split('').forEach(element => {
//         if (element == char) {
//             counter++;
//         }
//     });
//
//     return counter;
// }
//
// let chars = ['L', 'T', 'U', 'a'];
// let str = 'Lorem ipsum, dolor, sit amet consectetur adipisicing elit.';
//
// for (let c of chars) {
//     let count = checkForLetters(str, c);
//
//     console.log(`Case sensitive => Raidė “${c}” sakinyje rasta ${count} kartus`);
// }
//
// console.log('===========');
//
// for (let c of chars) {
//     let count = checkForLetters(str, c, true);
//
//     console.log(`Case insensitive => Raidė “${c}” sakinyje rasta ${count} kartus`);
// }

// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą.
// Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// // Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];
// console.log("getNumber", arr2)
// let getNumber = arr2.filter(x => typeof x === 'number');
// console.log("getNumber after filter", getNumber)
// getNumber.sort(function(a, b) {
//     return a - b;
// });
// console.log("getNumber after filter and sort", getNumber)

// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar
// visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

// const arr1 = [2, 7, 6, 9, 5];
//
// function checkIfAllSmaller(arr1, max){
//     let result = 0;
//
//     for (let value of arr1) {
//         console.log("value", value);
//         if (arr1 > max){
//             return true;
//         }
//     }
//     return false;
// }
//
// console.log(checkIfAllSmaller(arr1, 5));

// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė.
// Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras
// elementai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
// let citiesOfLithuania = [
//   'Vilnius',
//   'Kaunas',
//   'Klaipėda',
//   'Šiauliai',
//   'Panevėžys',
//   'Alytus',
//   'Marijampolė',
//   'Mažeikiai',
//   'Jonava',
//   'Utena',
// ];
//
// function filteredByLetter(arr, letter) {
//     return arr.filter(x => x.includes(letter));
// }
// console.log(filteredByLetter(citiesOfLithuania, 'a'));



// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus:
// a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz.
// “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus
// atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios
// priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division()
// turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.

// function addition(num1, num2) {
//     return num1 + num2;
// }
//
// function subtraction(num1, num2) {
//     return num1 - num2;
// }
//
// function multiplication(num1, num2) {
//     return num1 * num2;
//
// }
//
// function division(num1, num2) {
//     return num1 / num2;
// }
//
// function pow(num1, num2) {
//     return Math.pow(num1, num2);
//     console.log(pow);
// }
//
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
// function calculateValue(num1, num2, action) {
//     if (Number(num1) != num1) {
//         throw new Error('Number one is not a number');
//     }
//
//     if (Number(num2) != num2) {
//         throw new Error('Number two is not a number');
//     }
//
//     const actions = [addition, subtraction, multiplication, division, pow];
//
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//
//     const indexOfAction = actions.map(x => x.name).indexOf(action);
//     console.log("cia", indexOfAction);
//     if (indexOfAction === -1) {
//         throw new Error('Action not recognized');
//     }
//
//     return actions[indexOfAction](num1, num2);
// }
//
//
// console.log('calculateValue: 1, 5, addition', calculateValue(1, 5, 'addition'));
// console.log('calculateValue: 1, 5, subtraction', calculateValue(1, 5, 'subtraction'));
// console.log('calculateValue: 1, 5, multiplication', calculateValue(1, 5, 'multiplication'));
// console.log('calculateValue: 1, 5, division', calculateValue(1, 5, 'division'));
//
// console.log('calculateValue: 1, 5, division', calculateValue(1, 'a', 'division'));
// console.log('calculateValue: 1, 5, division', calculateValue(1, 5, 'divisionnn'));