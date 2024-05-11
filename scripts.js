// Función para validar el formulario de contacto
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert('Todos los campos son requeridos.');
        return false;
    }

// Aquí puedo añadir más validaciones si lo deseo

    return true; // Si todo está correcto
}

// Añade el evento de 'submit' al formulario
document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.querySelector('form');
    formulario.onsubmit = validarFormulario;
});

//Modo oscuro


if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-toggle').querySelector('i').classList.add('rotate');
}


document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.querySelector('i').classList.toggle('rotate');


    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
