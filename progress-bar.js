function animateProgress(circle, valueEl, target) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;

  let current = 0;
  const duration = 1500;
  const stepTime = 16;
  const steps = duration / stepTime;
  const increment = target / steps;

  const interval = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(interval);
    }

    const offset = circumference - (current / 10) * circumference;
    circle.style.strokeDashoffset = offset;
    valueEl.textContent = current.toFixed(2);

  }, stepTime);
}

// запуск при загрузке
window.addEventListener("load", () => {
  const circles = document.querySelectorAll(".progress");

  animateProgress(circles[0], document.getElementById("value1"), 8.7);
  animateProgress(circles[1], document.getElementById("value2"), 6.7);
});