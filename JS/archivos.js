// archivos.js

// Función para limpiar los datos del formulario
function limpiarFormulario() {
    document.getElementById('rut').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('paterno').value = '';
    document.getElementById('materno').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('edad').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('celular').value = '';
    document.getElementById('profesion').value = '';
    document.getElementById('motivo').value = '';
    document.getElementById("email").value = '';
}

// Función para validar el rut
function validarRut() {
    var rutInput = document.getElementById('rut');
    var rutValue = rutInput.value.trim().replace(/-/g, '').toUpperCase(); // Elimina guiones y convierte a mayúsculas
    var regex = /^[0-9]+[K]?$/; // Expresión regular modificada

    if (rutValue === "") {
        rutInput.classList.add('error');
        return false;
    }

    if (!regex.test(rutValue)) {
        rutInput.classList.add('error');
        return false;
    } else {
        rutInput.classList.remove('error');
        return true;
    }
}

// Función para validar el apellido paterno
function validarApellidoPaterno() {
    var apellidoPaternoInput = document.getElementById('paterno');
    var apellidoPaternoValue = apellidoPaternoInput.value.trim();

    if (apellidoPaternoValue.length < 3 || apellidoPaternoValue.length > 20) {
        apellidoPaternoInput.classList.add('error');
        return false;
    } else {
        apellidoPaternoInput.classList.remove('error');
        return true;
    }
}

// Función para validar el apellido materno
function validarApellidoMaterno() {
    var apellidoMaternoInput = document.getElementById('materno');
    var apellidoMaternoValue = apellidoMaternoInput.value.trim();

    if (apellidoMaternoValue.length < 3 || apellidoMaternoValue.length > 20) {
        apellidoMaternoInput.classList.add('error');
        return false;
    } else {
        apellidoMaternoInput.classList.remove('error');
        return true;
    }
}

// Función para validar el nombre
function validarNombre() {
    var nombreInput = document.getElementById('nombre');
    var nombreValue = nombreInput.value.trim();

    if (nombreValue.length < 3 || nombreValue.length > 20) {
        nombreInput.classList.add('error');
        return false;
    } else {
        nombreInput.classList.remove('error');
        return true;
    }
}

// Función para validar la fecha
function validarFecha() {
    var fechaInput = document.getElementById('fecha');
    var fechaValue = fechaInput.value.trim();

    if (fechaValue === "") {
        fechaInput.classList.add('error');
        return false;
    } else {
        fechaInput.classList.remove('error');
        return true;
    }
}

// Función para validar la edad entre  18 y 40 años
function validarEdad() {
    var edadInput = document.getElementById('edad');
    var edadValue = parseInt(edadInput.value);

    if (isNaN(edadValue) || edadValue < 18 || edadValue > 40) {
        edadInput.classList.add('error');
        return false;
    } else {
        edadInput.classList.remove('error');
        return true;
    }
}

// Funcion para validar el email 
function validarEmail() {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        emailInput.classList.add('error');
        return false;
    } else {
        emailInput.classList.remove('error');
        return true;
    }
}

// Funcion para validar el limite de caracteres en celular
function validarCelular() {
    var celularInput = document.getElementById('celular');
    var celularValue = celularInput.value.trim();

    if (celularValue.length < 9 || celularValue.length > 12 || isNaN(celularValue)) {
        celularInput.classList.add('error');
        return false;
    } else {
        celularInput.classList.remove('error');
        return true;
    }
}

// funcion para validar que los campos no esten vacios
function validarProfesion() {
    var profesionInput = document.getElementById('profesion');
    var profesionValue = profesionInput.value.trim();

    if (profesionValue === "") {
        profesionInput.classList.add('error');
        return false;
    } else {
        profesionInput.classList.remove('error');
        return true;
    }
}

// funcion para validar que los campos no esten vacios
function validarMotivo() {
    var motivoInput = document.getElementById('motivo');
    var motivoValue = motivoInput.value.trim();

    if (motivoValue === "") {
        motivoInput.classList.add('error');
        return false;
    } else {
        motivoInput.classList.remove('error');
        return true;
    }
}

function validarFormulario() {
    var esValido = true;

    if (!validarRut()) {
        esValido = false;
    }
    if (!validarNombre()) {
        esValido = false;
    }
    if (!validarApellidoPaterno()) {
        esValido = false;
    }
    if (!validarApellidoMaterno()) {
        esValido = false;
    }
    if (!validarEdad()) {
        esValido = false;
    }
    if (!validarGenero()) {
        esValido = false;
    }
    if (!validarCelular()) {
        esValido = false;
    }
    if (!validarEmail()) {
        esValido = false;
    }
    if (!validarProfesion()) {
        esValido = false;
    }
    if (!validarMotivo()) {
        esValido = false;
    }

    return esValido;
}


// Función para generar la carta de presentación
function generarAlerta() {
    var rut = document.getElementById('rut').value;
    var apellidoPaterno = document.getElementById('paterno').value;
    var apellidoMaterno = document.getElementById('materno').value;
    var nombre = document.getElementById('nombre').value;
    var fecha = document.getElementById('fecha' ).value;
    var edad = document.getElementById('edad').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var profesion = document.getElementById('profesion').value;
    var motivo = document.getElementById('motivo').value;
    var generoInputs = document.querySelectorAll('input[name="gender"]');
    var generoText = '';

    generoInputs.forEach(function(input) {
        if (input.checked) {
            if (input.id === 'dot-1') {
                generoText = 'Hombre';
            } else if (input.id === 'dot-2') {
                generoText = 'Mujer';
            } else if (input.id === 'dot-3') {
                generoText = 'Otro';
            }
        }
    });

    if (!rut) {
        alert("Por favor, ingrese un Rut.");
        return;
    }
    else if (!paterno) {
        alert("Por favor, ingrese su apellido paterno.");
        return;
    }
    else if (!materno) {
        alert("Por favor, ingrese su apellido materno.");
        return;
    }else if (!nombre) {
        alert("Por favor, ingrese su nombre.");
        return;
    }else if (!fecha) {
        alert("Por favor, ingrese su fecha de nacimiento.");
        return;
    }else if (!edad) {
        if(edad<18 || edad>40)
            alert("debe tener entre 18 y 40 de edad")
        else
            alert("Por favor, ingrese su edad.");
        return;
    }else if (!email) {
        alert("Por favor, ingrese su email.");
        return;
    }else if (!celular) {
        alert("Por favor, ingrese su celular o telefono.");
        return;
    }else if (!profesion) {
        alert("Por favor, ingrese su profesion.");
        return;
    }else if (!motivo) {
        alert("Por favor, ingrese su motivo para optar a este trabajo.");
        return;
    }else if (!generoText) {
        alert("Por favor, seleccione un Género.");
        return;
    }

    var mensaje = "Datos del formulario:\n\n";
    mensaje += "Rut: " + rut + "\n";
    mensaje += "Nombre: " + nombre + "\n";
    mensaje += "Apellido Paterno: " + apellidoPaterno + "\n";
    mensaje += "Apellido Materno: " + apellidoMaterno + "\n";
    mensaje += "Edad: " + edad + "\n";
    mensaje += "Género: " + generoText + "\n";
    mensaje += "Celular: " + celular + "\n";
    mensaje += "Profesión: " + profesion + "\n";
    mensaje += "Motivo de postulación: " + motivo + "\n";

    alert(mensaje);
    limpiarFormulario();
}






// Adjunta el evento submit al formulario
document.querySelector('form').addEventListener('submit', function(event) {
    // Previene el envío automático del formulario
    event.preventDefault();
    
    // Validar el formulario
    if (validarFormulario()) {
        // Si el formulario es válido, generar la alerta
        generarAlerta();
    } else {
        // Si el formulario no es válido, no hacer nada
        return false;
    }
});
