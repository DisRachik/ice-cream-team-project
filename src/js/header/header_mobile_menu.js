(() => {
  const menuBtnRef = document.querySelector('[data-header-menu-button]');
  const mobileMenuRef = document.querySelector('[data-header-menu]');
  const bodyScrollLock = document.querySelector('[body-scroll-lock]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    bodyScrollLock.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
  });
})();
