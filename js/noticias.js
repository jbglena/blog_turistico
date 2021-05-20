var info = confirm ("¿Desea recibir más novedades?")
if (info) {
  var mas_info = document. getElementById('NEWSLETTER')
  mas_info.style.display = 'block'
  var menos_info = document. getElementById('NEWSLETTER2')
  menos_info.style.display = 'none'
}
