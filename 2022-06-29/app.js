let shAlert = document.querySelector("#alertClick");

function showAlert() {
    if (shAlert) {
        alert('Hello world!');
    }
}
shAlert.addEventListener('click', showAlert);

// ---------------------------------

let caseInpt = document.querySelector("#inputCase");
let btnToUpperCase = document.querySelector("#btnToUpperCase");
let btnToLowerCase = document.querySelector("#btnToLowerCase");
let btnFirstUpperCase = document.querySelector("#btnFirstUpperCase");
let btnFirstLowerCase = document.querySelector("#btnFirstLowerCase");

if (btnToUpperCase) {
    btnToUpperCase.addEventListener('click', function (event){
        if (caseInpt) {
            caseInpt.value = (caseInpt.value).toUpperCase();
        }
    });
}
if (btnToLowerCase) {
    btnToLowerCase.addEventListener('click', function (event){
        if (caseInpt) {
            caseInpt.value = (caseInpt.value).toLowerCase();
        }
    });
}
if (btnFirstUpperCase) {
    btnFirstUpperCase.addEventListener('click', function (event){
        if (caseInpt) {
            caseInpt.value = (caseInpt.value).charAt(0).toUpperCase()+(caseInpt.value).slice(1);
        }
    });
}
if (btnFirstLowerCase) {
    btnFirstLowerCase.addEventListener('click', function (event){
        if (caseInpt) {
            caseInpt.value = (caseInpt.value).charAt(0).toLowerCase()+(caseInpt.value).slice(1);
        }
    });
}

// --------------------------------------------------

const checkInpt = document.querySelector("#btnSave");
const phoneError = document.querySelector('#phoneInput + span.error');
const emailError = document.querySelector('#emailInput + span.error');

function emailPhoneInpt() {

    const emailInpt = document.querySelector("#emailInput");
    const phoneInpt = document.querySelector("#phoneInput");

    if (emailInpt.validity.valueMissing || phoneInpt.validity.valueMissing) {
        emailError.textContent = 'Please check email';
        phoneError.textContent = 'Please check phone number';
        return false;
    } else {
        alert("Jūsų užklausa išsiųsta");
    }
}
checkInpt.addEventListener('click', emailPhoneInpt)

// -------------------------------------------------------------------

let btnBlock = document.querySelector("#btnBlock");
let btnUnBlock = document.querySelector("#btnUnBlock");
let inptBlockUnBlock = document.querySelector("#inptBlockUnBlock");

if (btnBlock) {
    btnBlock.addEventListener('click', function (event){
        if (inptBlockUnBlock) {
            inptBlockUnBlock.readOnly = true;
        }
    });
}
if (btnUnBlock) {
    btnUnBlock.addEventListener('click', function (event){
        if (inptBlockUnBlock) {
            inptBlockUnBlock.readOnly = false;
        }
    });
}

// -------------------------------------------------------------------

let monkeyOne = document.querySelector("#monkeyOne")
let monkeyTwo = document.querySelector("#monkeyTwo")
let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")


img1.addEventListener("pointerover", e => {
    if(monkeyTwo)
    monkeyTwo.className = "carousel-item active";
    monkeyOne.className = "carousel-item";
})
img2.addEventListener("pointerover", e => {
    if(monkeyOne)
        monkeyOne.className = "carousel-item active";
    monkeyTwo.className = "carousel-item";
})

// ------------------------------------------------------------

let btnReset = document.querySelector("#btnReset");

let menuColors = document.querySelector("#menuColors")
let dropdownColors = document.querySelector("#dropdownColors")
let colorRed = document.querySelector("#colorRed")
let colorGreen = document.querySelector("#colorGreen")
let colorBlue = document.querySelector("#colorBlue")

colorRed.addEventListener("click", e => {
    if(colorRed)
        menuColors.style.backgroundColor = "red"
        dropdownColors.style.backgroundColor = "red"
})
colorGreen.addEventListener("click", e => {
    if(colorGreen)
        menuColors.style.backgroundColor = "green"
        dropdownColors.style.backgroundColor = "green"
})
colorBlue.addEventListener("click", e => {
    if(colorBlue)
        menuColors.style.backgroundColor = "blue"
        dropdownColors.style.backgroundColor = "blue"
})

let menuBorders = document.querySelector("#menuBorders")
let dropdownBorders = document.querySelector("#dropdownBorders")
let borderColorRed = document.querySelector("#borderColorRed")
let borderColorGreen = document.querySelector("#borderColorGreen")
let borderColorBlue = document.querySelector("#borderColorBlue")

borderColorRed.addEventListener("click", e => {
    if(borderColorRed)
        menuBorders.style.borderColor = "red"
    dropdownBorders.style.borderColor = "red"
})
borderColorGreen.addEventListener("click", e => {
    if(borderColorGreen)
        menuBorders.style.borderColor = "green"
    dropdownBorders.style.borderColor = "green"
})
borderColorBlue.addEventListener("click", e => {
    if(borderColorBlue)
        menuBorders.style.borderColor = "blue"
    dropdownBorders.style.borderColor = "blue"
})

btnReset.addEventListener("click", e => {
    if(btnReset)
        menuColors.style.backgroundColor = ""
        dropdownColors.style.backgroundColor = ""
        menuBorders.style.borderColor = ""
        dropdownBorders.style.borderColor = ""
})

