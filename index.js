setInterval(() => {
let password = document.querySelectorAll('#password');
let r09 = document.getElementById('0-9').checked;
let raz = document.getElementById('a-z').checked;
let raZ = document.getElementById('a-Z').checked;
let ra9 = document.getElementById('a-9').checked;
let rA9 = document.getElementById('A-9').checked;
let count = document.getElementById('characters-count').value;
let btn = document.getElementById('btn');

btn.onclick = function() {
    if (r09 == true) {
        for(let i = 0; i < 4; i++) {
            password[i].textContent=func09()
        }
    } else if (raz == true) {
        for(let i = 0; i < 4; i++) {
            password[i].textContent=funcaz()
        }
    } else if (raZ == true) {
        for(let i = 0; i < 4; i++) {
            password[i].textContent=funcaZ()
        }
    } else if (ra9 == true) {
        for(let i = 0; i < 4; i++) {
            password[i].textContent=funca9()
        }
    } else if (rA9 == true) {
        for(let i = 0; i < 4; i++) {
            password[i].textContent=funcA9()
        }
    }
}
function func09() {
    let text = "";
    let possible = "0123456789";
    for (var i = 0; i < count; i++) {
        text += possible. charAt(Math. floor(Math. random() * possible. length));
    }
    return text
}

function funcaz() {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < count; i++) {
        text += possible. charAt(Math. floor(Math. random() * possible. length));
    }
    return text
}

function funcaZ() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < count; i++) {
        text += possible. charAt(Math. floor(Math. random() * possible. length));
    }
    return text
}

function funca9() {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < count; i++) {
        text += possible. charAt(Math. floor(Math. random() * possible. length));
    }
    return text
}

function funcA9() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < count; i++) {
        text += possible. charAt(Math. floor(Math. random() * possible. length));
    }
    return text
}
for (let i = 0; i < 4; i++){
password[i].onclick = function() {
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = password[i].textContent;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}}
;})