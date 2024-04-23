var rut             = document.getElementById('rut');
var paterno         = document.getElementById('paterno');
var materno         = document.getElementById('materno');
var nombre          = document.getElementById('nombre');
var fechaNacimiento = document.getElementById('fecha');
var edad            = document.getElementById('edad'); 
var correo          = document.getElementById('correo');
var profesion       = document.getElementById('profesion');
var motivo          = document.getElementById('motivo');
var generoRadios    = document.getElementsByName("genero");
var generoSeleccionado;

for (var i = 0; i < generoRadios.length; i++) {
    if (generoRadios[i].checked) {
        generoSeleccionado = generoRadios[i].value;
        break;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var rut = document.getElementById('rut');
    var paterno = document.getElementById('paterno');
    var materno = document.getElementById('materno');
    var nombre = document.getElementById('nombre');
    var fechaNacimiento = document.getElementById('fecha');
    var edad = document.getElementById('edad');
    var correo = document.getElementById('correo');
    var profesion = document.getElementById('profesion');
    var motivo = document.getElementById('motivo');
    var generoRadios = document.getElementsByName("genero");
    var generoSeleccionado;

    for (var i = 0; i < generoRadios.length; i++) {
        if (generoRadios[i].checked) {
            generoSeleccionado = generoRadios[i].value;
            break;
        }
    }
    var form = document.getElementById('form');

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtener los valores de los campos del formulario
        var rutValue = rut.value;
        var paternoValue = paterno.value;
        var maternoValue = materno.value;
        var nombreValue = nombre.value;
        var fechaValue = fechaNacimiento.value;
        var edadValue = edad.value;
        var correoValue = correo.value;
        var profesionValue = profesion.value;
        var motivoValue = motivo.value;

        // Crear el texto con los datos del usuario
        var datosUsuarioTexto = "Rut: " + rutValue + "\n" +
            "Apellido Paterno: " + paternoValue + "\n" +
            "Apellido Materno: " + maternoValue + "\n" +
            "Nombres: " + nombreValue + "\n" +
            "Fecha de nacimiento: " + fechaValue + "\n" +
            "Edad: " + edadValue + "\n" +
            "Correo: " + correoValue + "\n" +
            "Profesión: " + profesionValue + "\n" +
            "Motivo de postulación: " + motivoValue;

        // Mostrar los datos del usuario en el textarea
        var datosUsuarioTextarea = document.getElementById('carta');
        datosUsuarioTextarea.textContent = datosUsuarioTexto;
    });
});

function validarRut(rutCompleto) {
    return /^[0-9]+-[0-9kK]{0,1}$/.test(rutCompleto);
}

function validarApellidoPaterno(apellido) {
    if (apellido.length < 3 || apellido.length > 20) {
        return false;
    }
    return true;
}

function validarApellidoMaterno(apellido) {
    if (apellido.length < 3 || apellido.length > 20) {
        return false;
    }
    return true;
}

function validarNombre(nombre) {
    if (nombre.length < 3 || nombre.length > 20) {
        return false;
    }
    return true;
}

function validarFechaNacimiento(fechaNacimiento) {
    var regexFecha = /^(\d{2})-(\d{2})-(\d{4})$/;
    if (!regexFecha.test(fechaNacimiento)) {
        return false;
    }
    return true;
}

function validarEdad(edad) {
    return edad >= 18 && edad <= 35;
}

function validarCorreo(correo) {
    var regexCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexCorreo.test(correo);
}

function validarCelular(celular) {
    if (celular.length < 9 || celular.length > 11) {
        return false;
    }
    return true;
}

function mostrarCarta(genero) {
    var carta = document.getElementById("carta");
    carta.style.display = "block";
    if (carta) {
        carta.textContent = "Género: " + genero + "\n" +
            "Nombre: " + nombre.value + "\n" +
            "Apellidos: " + paterno.value + " " + materno.value + "\n" +
            "Fecha de nacimiento: " + fecha.value + "\n" +
            "Edad: " + edad.value + "\n" +
            "Correo: " + correo.value + "\n" +
            "Profesión: " + profesion.value + "\n" +
            "Motivo de postulación: " + motivo.value;
    }
}

document.getElementById("rut").addEventListener("input", function(evt) {
    let rut = this.value;
    // valida el rut aqui
    if (!validarRut(rut)) {
        this.setCustomValidity("Formato de RUT incorrecto. Debe ser xxxxxxxx-x sin puntos");
    } else {
        this.setCustomValidity(""); // Borra el mensaje de error si el dato es válido
    }
});

// Validar mientras se ingresa el apellido paterno
document.getElementById("paterno").addEventListener("input", function(evt) {
    let paterno = this.value;
    // Validar apellido paterno aquí
    if(!validarApellidoPaterno(paterno)){
        this.setCustomValidity('Ingrese un apellido entre 3 y 20 caracteres');
    } else {
        this.setCustomValidity(""); // Borra el mensaje de error si el dato es válido
    }
});

// Validar mientras se ingresa el apellido materno
document.getElementById("materno").addEventListener("input", function(evt) {
    let materno = this.value;
    // Validar apellido materno aquí
    if(!validarApellidoMaterno(materno)){
        this.setCustomValidity('Ingrese un apellido entre 3 y 20 caracteres');
    } else {
        this.setCustomValidity(""); // Borra el mensaje de error si el dato es válido
    }
});

// Validar mientras se ingresa el nombre
document.getElementById("nombre").addEventListener("input", function(evt) {
    let nombre = this.value;
    // Validar nombre aquí
    if(!validarNombre(nombre)){
        this.setCustomValidity('El nombre debe ser entre 3 y 20 caracteres');
    } else {
        this.setCustomValidity(""); // Borra el mensaje de error si el dato es válido
    }
});

// Validar mientras se ingresa la fecha de nacimiento
document.getElementById("fecha").addEventListener("input", function(evt) {
    let fechaNacimiento = this.value;
    // Ajustar el formato del valor de fecha
    let partesFecha = fechaNacimiento.split("-");
    fechaNacimiento = partesFecha[2] + "-" + partesFecha[1] + "-" + partesFecha[0];
    // Validar fecha de nacimiento aquí
    if (!validarFechaNacimiento(fechaNacimiento)) {
        this.setCustomValidity('La fecha de nacimiento no es válida');
    } else {
        this.setCustomValidity(""); // Borra el mensaje de error si el dato es válido
    }
});

// validar mientras se ingresa la edad
document.getElementById("edad").addEventListener("input", function(evt){
    let edad = parseInt(this.value); // Convertir el valor a un número entero
    // validar edad aqui
    if(isNaN(edad) || edad <  18 || edad > 35){
        document.getElementById("La edad debe ser entre 18 y 35 años");
    }else{ 
        this.setCustomValidity(""); // Borra el mensaje de error si el dato es válido
    }
});


// Validar mientras se ingresa el correo electrónico
document.getElementById("correo").addEventListener("input", function(evt) {
    let correo = this.value;
    // Validar correo electrónico aquí
    if(!validarCorreo(correo)){
        this.setCustomValidity('El correo no es válido');
    } else {
        this.setCustomValidity(""); // Borra el mensaje de error si el dato es válido
    }
});

// Validar mientras se ingresa el número de celular
document.getElementById("celular").addEventListener("input", function(evt) {
    let celular = this.value;
    // Validar número de celular aquí
    if (!validarCelular(celular)) {
        this.setCustomValidity('El teléfono debe tener al menos 9 y 10 dígitos');
    } else {
        this.setCustomValidity(""); // Borra el mensaje de error si el dato es válido
    }
});