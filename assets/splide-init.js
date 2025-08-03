// splide-init.js
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('splide-product-gallery');
  if (!el) return;

  new Splide(el, {
    type         : 'loop',      // continuous looping
    autoWidth    : true,        // allow multiple slides in view
    gap          : 0,           // no gap between slides
    arrows       : false,       // hide arrows
    pagination   : false,       // hide dots
    drag         : true,       // disable manual drag
    pauseOnHover : false,
    pauseOnFocus : false,
    autoScroll   : {
      speed     : 1,            // adjust scroll speed (1–10)
      autoStart : true,         // start automatically
    },
  // …mount call above…
}).mount( window.splide.Extensions );

// Strip out clones so Fancybox only shows real slides
el.querySelectorAll('.splide__slide--clone a[data-fancybox]')
  .forEach(a => a.removeAttribute('data-fancybox'));

// Bind Fancybox with modern thumbnails & slide transition
Fancybox.bind(
  '[data-fancybox="gallery-' + el.dataset.sectionId + '"]',
  {
    Thumbs: {
      type       : 'modern',
      showOnStart: true,
    },
    Carousel : { transition: 'slide', friction: 0.64 },
    SlideShow: { autoStart: false, speed: 1000 },
  }
);
});