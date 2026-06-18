var splide = new Splide('.splide-2', {
  perPage: 3,
  rewind: true,
  type: 'loop',
  autoplay: true,
  interval: 1000,
  pauseOnHover: true,
  pauseOnFocus: true,
  gap: 20,
  pagination: false,
})
.mount();