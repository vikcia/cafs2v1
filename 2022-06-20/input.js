const showInpt = document.querySelector("#btn");

function inpt() {
    if (showInpt) {
        alert("Jūsų užklausa išsiųsta");
    }
}
showInpt.addEventListener('click', inpt);

// function myFunction() {
//     var at = document.getElementById("inputEmail4").value.indexOf("@");
//     var age = document.getElementById("inputSurname").value;
//     var fname = document.getElementById("inputName").value;
//     submitOK = "true";
//
//     if (fname.length > 10) {
//         alert("The name may have no more than 10 characters");
//         submitOK = "false";
//     }
//
//     if (isNaN(age) || age < 1 || age > 100) {
//         alert("The age must be a number between 1 and 100");
//         submitOK = "false";
//     }
//
//     if (at == -1) {
//         alert("Not a valid e-mail!");
//         submitOK = "false";
//     }
//
//     if (submitOK == "false") {
//         return false;
//     }
// }

// function getVal() {
//     const val = document.querySelector('input').value;
//     console.log(val);
// }


// function validateForm() {
//     const nameInpt = document.querySelector("#inputName").value;
//     const surnameInpt = document.querySelector("#inputSurname").value;
//     const emailInpt = document.querySelector("#inputEmail4").value;
//     const adressInpt = document.querySelector("#inputAddress").value;
//     const cityInpt = document.querySelector("#inputCity").value;
//
//     if (!nameInpt || !surnameInpt || !emailInpt || !adressInpt || !cityInpt) {
//         alert("Please Fill All Required Fields");
//         return false;
//     } else {
//         showInpt.addEventListener('click', validateForm)
//     }
// }

// const allInpt = document.querySelectorAll('input');
//
// console.log(allInpt)
// if(document.querySelectorAll('input').length > 0)
// {
//     alert("empty"){
// }
//     return true;
// }


// const showInpt = document.querySelector("#btn");
// const nameInpt = document.querySelector("#inputName");
// const surnameInpt = document.querySelector("#inputSurname");
// const emailInpt = document.querySelector("#inputEmail4");
// const adressInpt = document.querySelector("#inputAddress");
// const cityInpt = document.querySelector("#inputCity");
//
//
//
// function inpt() {
//     if (nameInpt.lenght > 0) {
//         return true;
//     } else if (surnameInpt.lenght > 0) {
//         return true;
//     } else if (nameInpt.lenght > 0) {
//         return true;
//     } else if (emailInpt.lenght > 0) {
//         return true;
//     } else if (adressInpt.lenght > 0) {
//         return true;
//     } else if (cityInpt.lenght > 0) {
//         return true;
//     } else () {
//         alert("Prašome užpildyti langelius");
//     }
// // showInpt.addEventListener('click', inpt)
//
// function inpt() {
//     if (showInpt) {
//         alert("Jūsų užklausa išsiųsta");
//     }
//
//     showInpt.addEventListener('click', inpt)
// function required() {
//     if (showInpt) {
//         alert("Prašome užpildyti langelius");
//     }
// }
// showInpt.addEventListener('click', inpt)
//
// function testNum(a) {
//     let result;
//     if (a > 0) {
//         result = 'positive';
//     } else {
//         result = 'NOT positive';
//     }
//     return result;
// }