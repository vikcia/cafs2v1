// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

let numbers3 = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

function arrCountTwos(numbers3){
    let result = 0;

    for (let value of numbers3) {
        // console.log("value", value);
        if (value == 2){

            result = result + 1;
        }
    }
    return result;
}

console.log(arrCountTwos(numbers3));

