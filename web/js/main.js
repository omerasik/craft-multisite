document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.header__menu-toggle');
  const closeBtn  = document.querySelector('.header__menu-close');
  const drawerNav = document.querySelector('.header__drawer-nav');

  if (toggleBtn && drawerNav) {
    toggleBtn.addEventListener('click', () => {
      drawerNav.classList.add('open');
    });
  }

  if (closeBtn && drawerNav) {
    closeBtn.addEventListener('click', () => {
      drawerNav.classList.remove('open');
    });
  }
});



