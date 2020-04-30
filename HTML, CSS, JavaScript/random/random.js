function inicio() {
  let numeroUno = promt("Inserta el primer numeero");
  let numeroDos = promt("Inserta el segundo numero");
  let operacion = promp("¿Quieres sumar, restar o multiplicar?")

  if (operacion == "sumar") {
    let resultado = parseInt(numeroUno) + parseInt(numeroDos);
    alert(resultado);
  } else if (operacion == "multiplicar") {
    let resultado = parseInt(numeroUno) * parseInt(numeroDos);
    alert(resultado);
  } else if (operacion == "restar") {
    let resultado = parseInt(numeroUno) - parseInt(numeroDos);
    alert(resultado);
  } else {
    alert("ERROR")
  }
}
