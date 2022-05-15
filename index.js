// setInterval(() => {
let password = document.querySelectorAll('#password');
let r09 = document.getElementById('0-9');
let raz = document.getElementById('a-z');
let raZ = document.getElementById('a-Z');
let count = document.getElementById('characters-count');
let countp = document.getElementById('character-count-p');
let btn = document.getElementById('btn');

count.oninput = function() {
    render()
    countp.textContent = count.value;
}

r09.oninput = function() {
    render()
}
raz.oninput = function() {
    render()
}
raZ.oninput = function() {
    render()
}

btn.onclick = function() {
    render()
}

let possible = ""

function render() {
    if (r09.checked == true && raz.checked == true && raZ.checked == true) {
        for(let i = 0; i < 4; i++) {
            possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            password[i].textContent=func()
            password[i].style = 'height: auto'
        }
    } else if (r09.checked == false && raz.checked == true && raZ.checked == true) {
        for(let i = 0; i < 4; i++) {
            possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            password[i].textContent=func()
            password[i].style = 'height: auto'
        }
    } else if (r09.checked == false && raz.checked == false && raZ.checked == true) {
        for(let i = 0; i < 4; i++) {
            possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            password[i].textContent=func()
            password[i].style = 'height: auto'
        }
    } else if (r09.checked == true && raz.checked == true && raZ.checked == false) {
        for(let i = 0; i < 4; i++) {
            possible = 'abcdefghijklmnopqrstuvwxyz0123456789'
            password[i].textContent=func()
            password[i].style = 'height: auto'
        }
    } else if (r09.checked == true && raz.checked == false && raZ.checked == false) {
        for(let i = 0; i < 4; i++) {
            possible = '0123456789'
            password[i].textContent=func()
            password[i].style = 'height: auto'
        }
    } else if (r09.checked == false && raz.checked == true && raZ.checked == false) {
        for(let i = 0; i < 4; i++) {
            possible = 'abcdefghijklmnopqrstuvwxyz'
            password[i].textContent=func()
            password[i].style = 'height: auto'
        }
    } else if (r09.checked == true && raz.checked == false && raZ.checked == true) {
        for(let i = 0; i < 4; i++) {
            possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
            password[i].textContent=func()
            password[i].style = 'height: auto'
        }
    } else {
        for(let i = 0; i < 4; i++) {
            password[i].textContent = 'select some options please'     
            password[i].style = 'height: auto'      
        }
    }
} 



function func() {
    let text = "";
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