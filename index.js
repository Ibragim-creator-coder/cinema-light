var splide = new Splide( '.splide', {
  perPage: 3,
  rewind : true,
  type: 'loop',
  autoplay: true,
  interval: 1000,
  pagination: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  gap:20,
  pagination: false,
} );

splide.mount();