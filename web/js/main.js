document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose  = document.querySelector('.menu-close');
  const mobileNav  = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.add('open');
    });
  }

  if (menuClose && mobileNav) {
    menuClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  }
});
