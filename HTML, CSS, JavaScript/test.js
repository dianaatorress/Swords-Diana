let numIzq = 0
let numDer = 0
let totalsuma = 0

function sumaN1(){
  numIzq = numIzq + 1
  document.getElementById("n1").innerHTML = numIzq
}

function restaN1(){
  numIzq = numIzq - 1
  document.getElementById("n1").innerHTML = numIzq
}

function sumaN2(){
  numDer = numDer + 1
  document.getElementById("n2").innerHTML = numDer
}

function restaN2(){
  numDer = numDer - 1
  document.getElementById("n2").innerHTML = numDer
}

function total(){
  totalsuma = numIzq + numDer
  document.getElementById("resultado").innerHTML = totalsuma
}


console.log("hola");
