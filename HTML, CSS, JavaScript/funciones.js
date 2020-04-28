function colorear() {
  let etiqueta = document.getElementById("aqui")
  etiqueta.classList.add("letrasMoradas")
}

function subrayar() {
  let etiqueta = document.getElementById("aqui")
}

function inicio() {
  console.log("Hola soy don nadie");
  let numeroAleatorio = Math.floor(Math.random()*10)
  console.log(numeroAleatorio)

let intento = prompt("Adivina el numero")
console.log(intento)

if (intento == numeroAleatorio)
alert ("Felicidades, le atinaste!!!")
else
alert ("Lo siento :(")
}
