
function iniciar(){
var elemento=document.getElementById('lienzo');
lienzo=elemento.getContext('2d');

lienzo.shadowColor="rgba(0,0,0,0.5)";
lienzo.shadowOffsetX=1;
lienzo.shadowOffsetY=4;
lienzo.shadowBlur=6;
lienzo.font="bold 25px verdana, sans-serif";
lienzo.fillText("!VIAJEMOS JUNTOS! ", 5,50);
}
 window.addEventListener("load", iniciar, false);
