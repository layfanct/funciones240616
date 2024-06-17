function pintar(e, color = 'black'){
    e.target.style.backgroundColor = color;
}

document.getElementById("re1").addEventListener("click", pintar);
document.getElementById("re2").addEventListener("click", pintar);
document.getElementById("re3").addEventListener("click", pintar);
document.getElementById("re4").addEventListener("click", pintar);

let currentColor = '';

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        currentColor = 'pink';
    } else if (event.key === 's') {
        currentColor = 'orange';
    } else if (event.key === 'd') {
        currentColor = 'skyblue';
    }
    document.getElementById("key").style.backgroundColor = currentColor;

});

//crear nuevo div
function crearnuevoDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.marginTop = '10px';
    document.body.appendChild(nuevoDiv);
}

document.addEventListener('keydown', function (event) {
   
    if (event.key === 'q') {
        crearnuevoDiv('purple');
    } else if (event.key === 'w') {
        crearnuevoDiv('grey');
    } else if (event.key === 'e') {
        crearnuevoDiv('brown');
    }
});