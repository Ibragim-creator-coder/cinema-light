window.addEventListener("load", () => {
  const progress = document.getElementById("progress");
  const percentText = document.querySelector(".percent");

  let current = 0;
  const target = 85;
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

    progress.style.width = current + "%";
    percentText.textContent = Math.round(current) + "%";

  }, stepTime);
});
