let botonMostrar = document.getElementById('botonMostrar');

let ocultar = document.getElementById('ocultar');

function mostrarTexto(){
    ocultar.classList.remove('ocultarTexto');
    ocultar.classList.add('mostrar');
}

botonMostrar.addEventListener('click',mostrarTexto);










