const progress = document.getElementById("progress-2");
const percentText = document.getElementById("percent-2");

function animateProgress(target) {
  let current = 0;

  const interval = setInterval(() => {
    current++;

    progress.style.width = current + "%";
    percentText.textContent = current + "%";

    if (current >= target) {
      clearInterval(interval);
    }
  }, 20); // скорость анимации
}

// запуск при загрузке
window.addEventListener("load", () => {
  animateProgress(85);
});