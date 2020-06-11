function abCuenta(){
  let primerAhorro = prompt("¿Con cuanto deseas abrir tu cuenta? La cantidad minima es de $1000");

  if (primerAhorro >= 1000) {
    alert("INGRESO VALIDO");
    document.getElementById("actual").innerHTML = primerAhorro
  } else {
    alert("La cantidad minima es $1000");
    abCuenta();
  }
}

function ahorrar(){
  let ingreso = document.getElementById("cantUs").value;
  let canAc = document.getElementById("actual").innerHTML;

  let suma = parseInt(ingreso) + parseInt(canAc);
  document.getElementById("actual").innerHTML = suma;

  document.getElementById("cantUs").value = "";
}

function retirar(){
  let ingreso = document.getElementById("cantUs").value;
  let canAc = document.getElementById("actual").innerHTML;

  let resta = parseInt(canAc) - parseInt(ingreso);
  document.getElementById("actual").innerHTML = resta;

  document.getElementById("cantUs").value = "";
}

console.log("hola");
