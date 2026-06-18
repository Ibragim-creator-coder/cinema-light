var splide = new Splide('.splide-3', {
  perPage: 3,
  rewind: true,
  type: 'loop',
  interval: 1000,
  autoplay:true,
  pauseOnHover: true,
  pauseOnFocus: true,
  gap: 20,
  pagination: false,
})
.mount();