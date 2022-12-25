(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-milkshakes-modal-open]'),
    closeModalBtn: document.querySelector('[data-milkshakes-modal-close]'),
    modal: document.querySelector('[data-milkshakes-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('milkshakes-modal-is-hidden');
  }
})();
