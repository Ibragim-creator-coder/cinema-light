document.addEventListener('DOMContentLoaded', () => {

  const splide = document.querySelector('.splide');

  if (splide) {
    new Splide('.splide', {
      perPage: 3,
      rewind: true,
      type: 'loop',
      autoplay: true,
      interval: 1000,
      pauseOnHover: true,
      pauseOnFocus: true,
      gap: 20,
      pagination: false,
    }).mount();
  }

  const splide1 = document.querySelector('.splide-1');

  if (splide1) {
    new Splide('.splide-1', {
      perPage: 3,
      rewind: true,
      type: 'loop',
      autoplay: true,
      interval: 1000,
      pauseOnHover: true,
      pauseOnFocus: true,
      gap: 20,
      pagination: false,
    }).mount();
  }
});
