var header = document.querySelector(".toggle-yellow");

function toggleColor() {
  header.classList.toggle("is-yellow");
}

header.addEventListener("click", toggleColor);

var h1 = document.querySelector(".toggle-#005564");

function toggleColor() {
  h1.classList.toggle("is-#005564");
}

h1.addEventListener("click", toggleColor);

var block = document.querySelector(".toggle-#CF9697");

function toggleColor() {
  block.classList.toggle("is-#CF9697");
}

block.addEventListener("click", toggleColor);
