
// When the user clicks on the button, open the modal
function mostrar() {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultar() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function mostrarlo() {
  let modal = document.getElementById("mymodal");
    modal.style.display = "block";

}

// When the user clicks on the button, open the modal
function ocultarlo() {
  let modal = document.getElementById("mymodal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
