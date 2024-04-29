var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtnModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
try {
  btn.addEventListener("click", openModal);
} catch (err) { 
  console.log(err)
}
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
try {
  span.addEventListener("click", closeModal);
} catch (err) { 
  console.log(err)
}
// span.onclick = function () {
//   modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}