function guardar(){
	var boton = document.querySelector('#guardar')
	boton.addEventListener('click', listado)
	operaciones()

}

function listado(){

	var aamerica = document.querySelector('#america').value
	var eeuropa = document.querySelector('#europa').value
	var aasia = document.querySelector('#asia').value
	var ooceania = document.querySelector('#oceania').value
	var valores =[america,europa,asia,oceania]
	localStorage.setItem(aamerica,eeuropa, aasia, ooceania)
	alert("Inscripcion exitosa.")
	operaciones()


}
function operaciones(){
	var caja = document.querySelector('#mostrarDatos')
	for(var i=0; i<localStorage.lenght; i++){
		var id = localStorage.key(i)
		var valor = localStorage.getItem(id)
		caja.innerHTML +='<p>'+ id+'--'+valor+'</p>'
	}
}
window.addEventListener('load',guardar)

function borrar(){
	localStorage.clear()
	location.reload()
	operaciones()
	alert('Webinar eliminados.')
}
