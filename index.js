var splide = new Splide( '.splide', {
  perPage: 3,
  rewind : true,
  type: 'loop',
  autoplay: true,
  interval: 1000,
  pauseOnHover: true,
  pauseOnFocus: true,
  gap:20,
  pagination: false,
} );

splide.mount();

var splide1 = new Splide( '.splide-1', {
  perPage: 3,
  rewind : true,
  type: 'loop',
  autoplay: true,
  interval: 1000,
  pauseOnHover: true,
  pauseOnFocus: true,
  gap:20,
  pagination: false,
} );

splide1.mount();