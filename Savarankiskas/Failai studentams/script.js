// EXTERNAL API
const JSONPLACEHOLDER_URI = 'https://jsonplaceholder.typicode.com/posts';

// *** Variables ***
//-- buttons
const btnGetTextFile = document.getElementById('btn1');
const btnGetUser = document.getElementById('btn2');
const btnGetUsers = document.getElementById('btn3');
const btnGetPosts = document.getElementById('btn4');
const btnSendPost = document.getElementById('btn5');
//-- output
const textOutput = document.querySelector('#text');
const userOutput = document.querySelector('#user');
const usersOutput = document.querySelector('#users');
const postsOutput = document.querySelector('#posts');

// *** Functions ***
//OLD Version AJAX (XMLHttpRequest())
//-- Load Text File Information
function loadTextFileXHR() {
  return new Promise((resolve, reject) => {
    fetch('http://127.0.0.1:3000/sample')
        .then(response => response.text())
        .then((text) => {
            textOutput.innerHTML = text;
        })
        .catch(err => reject(err))
  });
}

// console.log(loadTextFileXHR());

// function loadTextFileUrl () {
//     if(loadTextFileUrl)
//         window.open('http://127.0.0.1:3000/sample',"_self")
// }

//-- Load User Information
function loadUserXHR() {
    return new Promise((resolve, reject) => {
        fetch('http://127.0.0.1:3000/user')
            .then(response => response.text())
            .then((text) => {userOutput.innerHTML = text;})
            .catch(err => reject(err))
    });
}

//-- Load Users information
function loadUsersXHR() {
    return new Promise((resolve, reject) => {
        fetch('http://127.0.0.1:3000/users')
            .then(response => response.text())
            .then((text) => {usersOutput.innerHTML = text;})
            .catch(err => reject(err))
    });
}
function loadPostsXHR() {
  return;
}

//NEW VERSION AJAX (fetch())
// -- Getting data
function loadPostsFETCH() {
  return;
}

// -- Sending data
function sendPostFETCH() {
  return;
}

let insertTable = document.querySelector("#myTable");

// *** Events ***
btnGetTextFile.addEventListener('click', loadTextFileXHR);
btnGetUser?.addEventListener('click', loadUserXHR);
btnGetUsers?.addEventListener('click', loadUsersXHR);
// btnGetUsers?.addEventListener('click', async function() {
//
//     let posts = await loadUsersXHR();
//     let table = insertTable;
//
//     for (let post of posts) {
//         let createTr = document.createElement('tr');
//         let createID = document.createElement('td');
//         let createUserID = document.createElement('td');
//         let createTitle = document.createElement('td');
//
//         createID.textContent = post.id;
//         createUserID.textContent = post.name;
//         createTitle.textContent = post.email;
//
//         createTr.appendChild(createID);
//         createTr.appendChild(createUserID);
//         createTr.appendChild(createTitle);
//         table.appendChild(createTr);
//     };
// });

btnGetPosts.addEventListener('click', loadPostsXHR);
btnGetPosts.addEventListener('click', loadPostsFETCH);
btnSendPost.addEventListener('click', sendPostFETCH);

/*
    readyState Values:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    More: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    HTTP Statuses
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
    More: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/
