function crecer(){
  let imagen = document.getElementById("img-Dragon");
  let botcrecer = document.getElementById("quecrece");

  if(imagen.width < 800){
      imagen.width += 30;
  }
  if (imagen.width > 800) {
    botcrecer.style.display="none"
  }else {
    botcrecer.style.display="block"
  }
}

function decrecer(){

  let imagen = document.getElementById("img-Dragon");

  if (imagen.width >= 230) {
    imagen.width -= 30;
  }
  if (imagen.width <= 235) {
    botdecrecer.style.display="none"
  }
}
