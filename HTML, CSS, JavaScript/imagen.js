function crecer(){
  let imagen = document.getElementById("img-Dragon");
  let botcrecer = document.getElementById("quecrece");
  let botdecrecer = document.getElementById("quedecrece");

  if(imagen.width < 800){
      imagen.width += 30;
  }
  if (imagen.width >= 800) {
    //botcrecer.style.display="none"
    botcrecer.disabled = true;
  }

  if (imagen.width > 200) {
    botdecrecer.disabled = false
  }
}

function decrecer(){

  let imagen = document.getElementById("img-Dragon");
  let botcrecer = document.getElementById("quecrece");
  let botdecrecer = document.getElementById("quedecrece");

  if (imagen.width >= 200) {
    imagen.width -= 30;
  }
  if (imagen.width <= 200) {
    //botdecrecer.style.display="none"
    botdecrecer.disabled = true;
  }

  if (imagen.width < 800) {
    botcrecer.disabled = false;
  }
}

function cambio(){
  let imagen = document.getElementById("img-Dragon")
  imagen.src = "https://www.plantas-acuario.es/wp-content/uploads/2019/09/betta-de-doble-cola.jpg" = true
  


//if (imagen = "https://www.plantas-acuario.es/wp-content/uploads/2019/09/betta-de-doble-cola.jpg") {
  //imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQkV2rEvDunsUqj5n36rX4uPiTFmufDph2NyxKuQuE3Y9FQ4Hy&usqp=CAU"
//}

}
