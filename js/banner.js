// Array con las imagenes que se van a ir mostrando en la web
var imagenes=new Array(
    'imagenes_banner/1.jpg',
    'imagenes_banner/2.jpg',
    'imagenes_banner/3.jpg',
    'imagenes_banner/4.jpg',
    'imagenes_banner/5.jpg',
);

//Funcion para cambiar la imagen

function rotarImagenes() {
var index=Math.floor((Math.random()*imagenes.length));
    // cambia la imagen
document.getElementById("imagen").src=imagenes[index];
}

//Función que se ejecuta una vez cargada la página
onload=function()
{
    // Carga imagen aleatoria
    rotarImagenes();

    // Cada cuanto cambia la imagen
    setInterval(rotarImagenes,4000);
}
