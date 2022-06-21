const inpt = document.getElementById('fname');
const copyInpt = document.getElementById('country');
const btn = document.querySelector('button');

if (btn) {
    if (inpt.length > 0) {
        copyInpt[0].value = inpt[0].value;
    }
    btn.addEventListener('click', btn);
}