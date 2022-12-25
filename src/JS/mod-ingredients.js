(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-ingridents-modal-open]'),
    closeModalBtn: document.querySelector('[data-ingridents-modal-close]'),
    modal: document.querySelector('[data-ingridents-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('ingridents-modal-is-hidden');
  }
})();
