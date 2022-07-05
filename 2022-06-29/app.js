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

// if (checkInpt) {
//     checkInpt.addEventListener('click', function (event) {
//         if (emailInpt.validity.valueMissing || phoneInpt.validity.valueMissing) {
//             emailError.textContent = 'Please check email';
//             phoneError.textContent = 'Please check phone number';
//             return false;
//         } else {
//             alert("Jūsų užklausa išsiųsta");
//         }
//     });
// }

const checkInpt = document.querySelector("#btnSave");
const phoneError = document.querySelector('#phoneInput + span.error');
const emailError = document.querySelector('#emailInput + span.error');
const emailInpt = document.querySelector("#emailInput");
const phoneInpt = document.querySelector("#phoneInput");

if (checkInpt) {
    checkInpt.addEventListener('click', function (event) {
        if (emailInpt.validity.valueMissing || phoneInpt.validity.valueMissing) {
            emailError.textContent = 'Please check email';
            phoneError.textContent = 'Please check phone number';
            return false;
        } else {
            alert("Jūsų užklausa išsiųsta");
        }
    });
}
if (checkInpt) {
    checkInpt.addEventListener('click', function (event) {
        if (!emailInpt.validity.valueMissing) {
            return emailError.textContent = '';
        } else {
            return
        }
    });
}
if (checkInpt) {
    checkInpt.addEventListener('click', function (event) {
        if (!phoneInpt.validity.valueMissing) {
            return phoneError.textContent = '';
        } else {
            return
        }
    });
}

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
let img1 = document.querySelector("img")
let img2 = document.querySelector("#img2")


img1.addEventListener("mouseover", e => {
    if(monkeyTwo)
    monkeyTwo.className = "carousel-item active";
    monkeyOne.className = "carousel-item";
})
img2.addEventListener("mouseout", e => {
    if(monkeyOne)
        monkeyOne.className = "carousel-item active";
    monkeyTwo.className = "carousel-item";
})

// ------------------------------------------------------------

let btnReset = document.querySelector("#btnReset");
let idBody = document.querySelector("#idBody")

let cursorPointer = document.querySelector("#cursorPointer")
let cursorText = document.querySelector("#cursorText")
let cursorCopy = document.querySelector("#cursorCopy")
let cursorFoo = document.querySelector("#cursorFoo")
let cursorHelp = document.querySelector("#cursorHelp")
let cursorCrosshair = document.querySelector("#cursorCrosshair")

cursorPointer.addEventListener("click", e => {
    if(cursorPointer)
        idBody.style.cursor = "pointer"
})
cursorText.addEventListener("click", e => {
    if(cursorText)
        idBody.style.cursor = "text"
})
cursorCopy.addEventListener("click", e => {
    if(cursorCopy)
        idBody.style.cursor = "copy"
})
cursorFoo.addEventListener("click", e => {
    if(cursorFoo)
        idBody.style.cursor = "foo"
})
cursorHelp.addEventListener("click", e => {
    if(cursorHelp)
        idBody.style.cursor = "help"
})
cursorCrosshair.addEventListener("click", e => {
    if(cursorCrosshair)
        idBody.style.cursor = "crosshair"
})

let colorRed = document.querySelector("#colorRed")
let colorGreen = document.querySelector("#colorGreen")
let colorBlue = document.querySelector("#colorBlue")

colorRed.addEventListener("click", e => {
    if(colorRed)
        blockquoteSet.style.color = "red"
})
colorGreen.addEventListener("click", e => {
    if(colorGreen)
        blockquoteSet.style.color = "green"
})
colorBlue.addEventListener("click", e => {
    if(colorBlue)
        blockquoteSet.style.color = "blue"
})

let borderColorRed = document.querySelector("#borderColorRed")
let borderColorGreen = document.querySelector("#borderColorGreen")
let borderColorBlue = document.querySelector("#borderColorBlue")
let blockquoteSet = document.querySelector("#blockquoteSet")

borderColorRed.addEventListener("click", e => {
    if(borderColorRed)
        blockquoteSet.style.border = "solid red"
})
borderColorGreen.addEventListener("click", e => {
    if(borderColorGreen)
        blockquoteSet.style.border = "solid green"
})
borderColorBlue.addEventListener("click", e => {
    if(borderColorBlue)
        blockquoteSet.style.border = "solid blue"
})

btnReset.addEventListener("click", e => {
    if(btnReset)
        blockquoteSet.style.color = ""
        blockquoteSet.style.border = ""
        idBody.style.cursor = ""
})

