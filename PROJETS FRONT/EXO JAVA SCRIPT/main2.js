var bouton = document.getElementById("dark");
var bouton = document.getElementById("menu"); 

var container = document.getElementById("container");

bouton.addEventListener('click', change);

function change() {
    container.classList.toggle("dark")
}

function myFunction() {
    var element = document.getElementById("navlink");
    element.classList.toggle("open");
}



