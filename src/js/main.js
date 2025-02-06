var header = document.querySelector(".toggle-yellow");

function toggleColor() {
  header.classList.toggle("is-yellow");
}

header.addEventListener("click", toggleColor);
