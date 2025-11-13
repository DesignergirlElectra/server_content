$(function () {
  $("#header").load("../shared/header.html");
  $("#footer").load("../shared/footer.html");
});
const slides = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
let index = 0;

function showSlide(n) {
  if (n >= images.length) index = 0;
  if (n < 0) index = images.length - 1;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".arrow.right").addEventListener("click", () => {
  index++;
  showSlide(index);
});

document.querySelector(".arrow.left").addEventListener("click", () => {
  index--;
  showSlide(index);
});

// Auto Slide every 5 seconds
setInterval(() => {
  index++;
  showSlide(index);
}, 5000);
