console.log("Bienvenida, lista para jugar???");

// RESPUESTAS CORRECTAS

// function revisarr(){
//   let respuestaCorrecta = document.getElementById("respuestaCorrecta");
//   respuestaCorrecta.style.backgroundColor = "#0B3B0B";
//   respuestaCorrecta.style.color = "#E0F8E0";
// }
let puntaje = 0;

function revisarCorrecta(numero){
  let respuestaCorrecta = document.getElementById("respuestaCorrecta" + numero);
  respuestaCorrecta.style.backgroundColor = "#0B3B0B";
  respuestaCorrecta.style.color = "#E0F8E0";
  // alert("Excelente, llevas 1/15");
  puntaje++;
  document.getElementById("puntaje").innerText = puntaje;
  respuestaCorrecta.disabled = "true";
  document.getElementById("respuestaIncorrecta" + numero + "a").disabled = "true";
  document.getElementById("respuestaIncorrecta" + numero + "b").disabled = "true";
}

// RESPUESTAS INCORRECTAS

function revisarIncorrecta(numero,letra) {
  let respuestaIncorrecta = document.getElementById("respuestaIncorrecta" + numero + letra);
  respuestaIncorrecta.style.backgroundColor = "#3B0B0B";
  respuestaIncorrecta.style.color = "#F8E0E0";
  document.getElementById("respuestaCorrecta" + numero).disabled = "true";
  document.getElementById("respuestaIncorrecta" + numero + "a").disabled = "true";
  document.getElementById("respuestaIncorrecta" + numero + "b").disabled = "true";
  // alert("Lo siento, fallaste, veremos si sabes la próxima...");
}

// function revisar2() {
//   let respuestaIncorrecta2 = document.getElementById("respuestaIncorrecta2");
//   respuestaIncorrecta2.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta2.style.color = "#F8E0E0";
//   alert("vaya... parece que no estuviste atenta en esta parte del tema.");
// }
//
// function revisar3() {
//   let respuestaIncorrecta3 = document.getElementById("respuestaIncorrecta3");
//   respuestaIncorrecta3.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta3.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar4() {
//   let respuestaIncorrecta4 = document.getElementById("respuestaIncorrecta4");
//   respuestaIncorrecta4.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta4.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar5() {
//   let respuestaIncorrecta5 = document.getElementById("respuestaIncorrecta5");
//   respuestaIncorrecta5.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta5.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar6() {
//   let respuestaIncorrecta6 = document.getElementById("respuestaIncorrecta6");
//   respuestaIncorrecta6.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta6.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar7() {
//   let respuestaIncorrecta7 = document.getElementById("respuestaIncorrecta7");
//   respuestaIncorrecta7.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta7.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar8() {
//   let respuestaIncorrecta8 = document.getElementById("respuestaIncorrecta8");
//   respuestaIncorrecta8.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta8.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar9() {
//   let respuestaIncorrecta9 = document.getElementById("respuestaIncorrecta9");
//   respuestaIncorrecta9.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta9.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar10() {
//   let respuestaIncorrecta10 = document.getElementById("respuestaIncorrecta10");
//   respuestaIncorrecta10.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta10.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar11() {
//   let respuestaIncorrecta11 = document.getElementById("respuestaIncorrecta11");
//   respuestaIncorrecta11.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta11.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar12() {
//   let respuestaIncorrecta12 = document.getElementById("respuestaIncorrecta12");
//   respuestaIncorrecta12.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta12.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar13() {
//   let respuestaIncorrecta13 = document.getElementById("respuestaIncorrecta13");
//   respuestaIncorrecta13.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta13.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar14() {
//   let respuestaIncorrecta14 = document.getElementById("respuestaIncorrecta14");
//   respuestaIncorrecta14.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta14.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar15() {
//   let respuestaIncorrecta15 = document.getElementById("respuestaIncorrecta15");
//   respuestaIncorrecta15.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta15.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar16() {
//   let respuestaIncorrecta16 = document.getElementById("respuestaIncorrecta16");
//   respuestaIncorrecta16.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta16.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar17() {
//   let respuestaIncorrecta17 = document.getElementById("respuestaIncorrecta17");
//   respuestaIncorrecta17.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta17.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar18() {
//   let respuestaIncorrecta18 = document.getElementById("respuestaIncorrecta18");
//   respuestaIncorrecta18.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta18.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar19() {
//   let respuestaIncorrecta = document.getElementById("respuestaIncorrecta19");
//   respuestaIncorrecta19.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta19.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar20() {
//   let respuestaIncorrecta20 = document.getElementById("respuestaIncorrecta20");
//   respuestaIncorrecta20.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta20.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar21() {
//   let respuestaIncorrecta21 = document.getElementById("respuestaIncorrecta21");
//   respuestaIncorrecta21.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta21.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar22() {
//   let respuestaIncorrecta22 = document.getElementById("respuestaIncorrecta22");
//   respuestaIncorrecta22.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta22.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar23() {
//   let respuestaIncorrecta23 = document.getElementById("respuestaIncorrecta23");
//   respuestaIncorrecta23.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta23.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar24() {
//   let respuestaIncorrecta = document.getElementById("respuestaIncorrecta24");
//   respuestaIncorrecta24.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta24.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar25() {
//   let respuestaIncorrecta25 = document.getElementById("respuestaIncorrecta25");
//   respuestaIncorrecta25.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta25.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar26() {
//   let respuestaIncorrecta26 = document.getElementById("respuestaIncorrecta26");
//   respuestaIncorrecta26.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta26.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar27() {
//   let respuestaIncorrecta27 = document.getElementById("respuestaIncorrecta27");
//   respuestaIncorrecta27.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta27.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar28() {
//   let respuestaIncorrecta28 = document.getElementById("respuestaIncorrecta28");
//   respuestaIncorrecta28.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta28.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar29() {
//   let respuestaIncorrecta29 = document.getElementById("respuestaIncorrecta29");
//   respuestaIncorrecta29.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta29.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar30() {
//   let respuestaIncorrecta30 = document.getElementById("respuestaIncorrecta30");
//   respuestaIncorrecta30.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta30.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar31() {
//   let respuestaIncorrecta31 = document.getElementById("respuestaIncorrecta31");
//   respuestaIncorrecta31.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta31.style.color = "#F8E0E0";
//   alert("Lo siento, esfuérzate más en la próxima");
// }
//
// function revisar32() {
//   let respuestaIncorrecta32 = document.getElementById("respuestaIncorrecta32");
//   respuestaIncorrecta32.style.backgroundColor = "#3B0B0B";
//   respuestaIncorrecta32.style.color = "#F8E0E0";
//   alert("Vaya, se nota que estuviste en las nubes toda la clase. ¡Pon más atención a la siguiente!, ¿de acuerdo?");
// }

// function cambiarSeleccion(){
//   document.getElementById("other").checked = true;
// }
//
// function verificar(){
//   let answer = document.getElementById("Su proceso de individuación");
//   if (answer = true){
//     console.log("Has acertado");
//   } else {
//     console.log("Lo siento, saldrá a la próxima :)");
//   }
// }
