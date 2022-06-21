// console.log(document.getElementById ('age-table'));
//
// let td = getElementById ('age-table').getElementByTagName('td');
// console.log(td[0]);
//
// let label = getElementByTagName('table').querySelectorAll('label');
// console.log(label);
// console.log(document.getElementById('form').children[1]);
// console.log(document.getElementById('form').children[5]);

// // --------------------------------
//
// let labels = document.getElementsByTagName('label');
// if (labels.length >0) {
//     let labelsFromTable = Array.from(labels).filter (e => e.parentNode.nodName =='TD');
//
//     console.log(labels);
//     console.log(labelsFromTable);
// }
//
//
// // ---------------
//
//
// console.log(let inputs = document.querySelectorAll('form > input');
//
// console.log(inputs);
// console.log(inputs[0]);

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Element#events
// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
// https://developer.mozilla.org/en-US/docs/Web/API/Event
//
const inpt = document.getElementById('fname');
const copyInpt = document.getElementById('country');
const btn = document.querySelector('button');

// function clickEventHandler(event) {
//     // console.log('clickEventHandler', event.target.nodeName, event);
//     // console.log(inpt.value);


    if (btn) {
        if (inpt.length > 0) {
            copyInpt[0].value = inpt[0].value;
        }
        // btn.addEventListener('click', function(event) {
        // 	console.log('anonymous function', event);
        // });

        // btn.addEventListener('click', (event) => {
        // 	console.log('anonymous arrow function', event);
        // });

        // const clickEventHandlerAsVariable = function(event) {
        // 	console.log('clickEventHandlerAsVariable', event);
        // };

        // btn.addEventListener('click', clickEventHandlerAsVariable);

        btn.addEventListener('click', btn);
    }
// }
// // document.querySelector('button:last-of-type')?.addEventListener('click', clickEventHandler);
// const allButtons = document.querySelectorAll('button:last-of-type');
//
// if (allButtons.length > 0) {
//     allButtons[allButtons.length - 1].addEventListener('click', clickEventHandler);
// }
//
// // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
// inpt?.addEventListener('change', function(event) {
//     console.log('change', event.target.value);
// });
//
// // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
// inpt?.addEventListener('input', function(event) {
//     console.log('input', event.target.value);
// });