






const swiper = new Swiper('.projects__content', {
   /*
   effect: 'fade',
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   */
   observer: true,
   observeParents: true,
   slidesPerView: 1,
   spaceBetween: 0,
   autoHeight: true,
   speed: 800,
   //touchRatio: 0,
   //simulateTouch: false,
   //loop: true,
   //preloadImages: false,
   //lazy: true,
   // Dotts
   //pagination: {
   //	el: '.slider-quality__pagging',
   //	clickable: true,
   //},
   // Arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 0,
         autoHeight: true,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 20,
      },

   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   // And if we need scrollbar
   //scrollbar: {
   //	el: '.swiper-scrollbar',
   //},
});
