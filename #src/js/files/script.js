
// New burger
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const iconMenuFirst = document.querySelector('.icon-menu__first');
const menuBodyFirst = document.querySelector('.menu__body-first');
if (iconMenu) {
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}
if (iconMenuFirst) {
   iconMenuFirst.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenuFirst.classList.toggle('_active');
      menuBodyFirst.classList.toggle('_active');
   });
}

// New scroll
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValve = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         } else if (iconMenuFirst.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenuFirst.classList.remove('_active');
            menuBodyFirst.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValve,
            behavior: "smooth"
         });
         e.preventDefault();
      }

   }
}




