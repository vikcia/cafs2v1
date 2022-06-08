// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip,
// kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu,
// priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

let num = [3, 2, 2, 4, 3];

function reverseNumbers(num, numRev){
    return num.reverse(numRev);
}

console.log("reverseNumbers", reverseNumbers(num));