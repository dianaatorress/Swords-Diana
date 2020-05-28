function comprobar(){
  let num1 = document.getElementById("num1").innerHTML;
  let num2 = document.getElementById("num2").innerHTML;
  let numUsuario = document.getElementById("num").value;

  let resMul = num1 * num2;

  if (numUsuario == resMul) {
    alert("BIEN");
  } else {
    alert("VUELVE A INTENTAR")
  }
}

function actualizar(){
  
}
