"use strict";

var button = document.getElementById('changeBackground');
function cambiaColor() {
    document.body.style.backgroundColor = 'pink';
}
button.addEventListener('click', cambiaColor);

document.getElementById('changeBackground').addEventListener('dblclick', () => { document.body.style.backgroundColor = 'mediumpurple'; } );

function bienvenido() {
    alert("Bienvenido a mi pagina web!!!");
}

function saludar() {
    alert('Hola a todos....');
}
document.getElementById('btnAccion').onclick = saludar;

function resaltar(tipoEvento) {
    var evento = tipoEvento || window.event;
    switch(evento.type) {
        case 'mouseover':
            this.style.borderColor = 'lightgreen';
            break;
        case 'mouseout':
            this.style.borderColor = 'lightblue';
            break; 
    }
}
window.onload = function() {
   document.getElementById('contenidoC').onmousemover = resaltar;
   document.getElementById('contenidoC').onmousemout = resaltar;
    
   bienvenido();
    
}