
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


// When the user clicks on the button, open the modal
function mostrare() {
  let modal = document.getElementById("mimodal");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultare() {
  let modal = document.getElementById("mimodal");
  modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function semuestra() {
  let modal = document.getElementById("mimmodal")
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function seoculta() {
  let modal = document.getElementById("mimmodal");
  modal.style.display = "none";
}


// When the user clicks on the button, open the modal
function mostrari() {
  let modal = document.getElementById("mymodaal")
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function ocultari() {
  let modal = document.getElementById("mymodaal")
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
