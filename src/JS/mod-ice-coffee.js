(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-ice-coffee-modal-open]'),
    closeModalBtn: document.querySelector('[data-ice-coffee-modal-close]'),
    modal: document.querySelector('[data-ice-coffee-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('ice-coffee-modal-is-hidden');
  }
})();
