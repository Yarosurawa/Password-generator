// setInterval(() => {
let password = document.querySelectorAll('#password');
let r09 = document.getElementById('0-9');
let raz = document.getElementById('a-z');
let raZ = document.getElementById('a-Z');
let ra9 = document.getElementById('a-9');
let rA9 = document.getElementById('A-9');
let count = document.getElementById('characters-count');
let countp = document.getElementById('character-count-p');
let btn = document.getElementById('btn');

count.oninput = function() {
    render()
    countp.textContent = count.value;
}

btn.onclick = function() {
    render()
}

function render() {
    if (r09.checked == true) {
        for(let i = 0; i < 4; i++) {
            password[i].textContent=func09()
        }
    } else if (raz.checked == true) {
        for(let i = 0; i < 4; i++) {
            password[i].textContent=funcaz()
        }
    } else if (raZ.checked == true) {
        for(let i = 0; i < 4; i++) {
            password[i].textContent=funcaZ()
        }
    } else if (ra9.checked == true) {
        for(let i = 0; i < 4; i++) {
            password[i].textContent=funca9()
        }
    } else if (rA9.checked == true) {
        for(let i = 0; i < 4; i++) {
            password[i].textContent=funcA9()
        }
    }
}


function func09() {
    let text = "";
    let possible = "0123456789";
    for (var i = 0; i < count.value; i++) {
        text += possible. charAt(Math. floor(Math. random() * possible. length));
    }
    return text
}

function funcaz() {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < count.value; i++) {
        text += possible. charAt(Math. floor(Math. random() * possible. length));
    }
    return text
}

function funcaZ() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < count.value; i++) {
        text += possible. charAt(Math. floor(Math. random() * possible. length));
    }
    return text
}

function funca9() {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < count.value; i++) {
        text += possible. charAt(Math. floor(Math. random() * possible. length));
    }
    return text
}

function funcA9() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < count.value; i++) {
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
    alert("Copied to a clipboard")
}}

render()
// ;})