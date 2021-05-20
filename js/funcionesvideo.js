var video = document.querySelector('.VIDEO')
var boton_reproducir = document.querySelector('#reproducir')

function reproducir(){
  if (video.paused) {
    video.play()
    boton_reproducir.innerHTML='<span class="icon-pause2"></span>'
  } else {
    video.pause()
    boton_reproducir.innerHTML='<span class="icon-play3"></span>'
  }
}

function detener(){
  video.pause()
  video.currentTime=0 //FOTOGRAMA 0 DEL VIDEO
  boton_reproducir.innerHTML='<span class="icon-play3"></span>'
}

function saltar(fotogramas){
video.currentTime+=fotogramas
}
