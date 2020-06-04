function comprobar(){
  let num1 = document.getElementById("num1").innerHTML;
  let num2 = document.getElementById("num2").innerHTML;
  let numUsuario = document.getElementById("num").value;

  let resMul = num1 * num2;

  if (numUsuario == resMul) {
    alert("BIEN");
    document.getElementById("num").value = "";
    actualizar();
  } else {
    alert("VUELVE A INTENTAR")
  }
}

function actualizar(){
  let numRandom = Math.floor(Math.random()*50)+1;
  console.log(numRandom);
  let numRandom2 = Math.floor(Math.random()*50)+1;

  document.getElementById("num1").innerHTML = numRandom
  document.getElementById("num2").innerHTML = numRandom2
}

console.log("hola");
