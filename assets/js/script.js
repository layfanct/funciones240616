const ele = document.getElementById("ele1")

function pintar(e, color = 'green'){
e.target.style.backgroundColor = color
}

//ele.addEventListener("click", pintar);

ele.addEventListener("click", (e) => {
    pintar(e, 'yellow')
});

