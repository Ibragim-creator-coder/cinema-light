let slides = document.querySelectorAll(".slide");
let items = document.querySelectorAll(".side-item");

function goToSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  items.forEach(i => i.classList.remove("active"));

  slides[index].classList.add("active");
  items[index].classList.add("active");
} 