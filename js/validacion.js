var correo = document.getElementById('email')
var mensaje = document.getElementById('consulta')


function validarDatos() {
correo.addEventListener('input' , validarCorreo)
mensaje.addEventListener('input' , validarMensaje)
validarCorreo()
validarMensaje()
}


function validarCorreo() {
  if (correo.value=='') {
    correo.setCustomValidity('Formato de correo incorrecto.')
  } else {
    correo.setCustomValidity('')
   }
  }

function validarMensaje(){
  if (mensaje.value=='') {
    mensaje.setCustomValidity('Ingrese su consulta.')
  } else {
     mensaje.setCustomValidity('')
  }
   }

window.addEventListener('load' , validarDatos)
