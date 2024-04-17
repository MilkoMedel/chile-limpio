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

var v_rut = document.getElementById('rut');
var vali_rut = v_rut.length;
var v_nombre = document.getElementById('nombre');
var vali_nombre = v_nombre.length;
var v_paterno = document.getElementById('paterno');
var vali_paterno = v_paterno.length;
var v_materno = document.getElementById('materno');
var vali_materno  = v_materno.length ;
var v_fecha = document.getElementById('fecha');
var vali_fecha = ;
var v_edad = document.getElementById('edad');
var vali_   = ;
var v_email = document.getElementById("email");
var vali_   = ;
var v_genero = document.querySelector('input[name="gender"]:checked').checked = 'dot-3';
var vali_   = ;
var v_celular = document.getElementById('celular');
var vali_   = ;
var v_profesion = document.getElementById('profesion');
var vali_   = ;
var v_motivo = document.getElementById('motivo');
var error = document.getElementById('error');

const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
const CURRENT_YEAR = new Date().getFullYear()

const validateDate = (birthDate) => {
    
  /* Comprobar formato dd/mm/yyyy, que el no sea mayor de 12 y los días mayores de 31 */
  if (!birthDate.match(DATE_REGEX)) {
    return false
  }
  
  /* Comprobar los días del mes */
  const day = parseInt(birthDate.split('/')[0])
  const month = parseInt(birthDate.split('/')[1])
  const year = parseInt(birthDate.split('/')[2])
  const monthDays = new Date(year, month, 0).getDate()
  if (day > monthDays) {
    return false
  }
  
  /* Comprobar que el año no sea superior al actual*/
  if (year > CURRENT_YEAR) {
    return false
  }
  return true
}

const validateForm = event => {
  event.preventDefault();
  const date = document.querySelector('.input').value;
  const validationMessage = document.querySelector('.validation-message');
  if(validateDate(date)) {
    validationMessage.classList.add("success");
    validationMessage.innerHTML='¡Fecha válida!';
  } else {
    validationMessage.classList.add("error");
    validationMessage.innerHTML='¡Fecha  no válida!';
  }
}
document.querySelector(".form").addEventListener('submit', validateForm);
function enviarFormulario(){
    console.log('enviar formulario...')
    var mensajeError = [];

    if(v_nombre.value === null || v_nombre === ''){
        mensajeError.push('Ingrese su nombre')
    }else if(v_nombre.value.length < 3 ){
    }
    return false;
}
