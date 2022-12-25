(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mod-about-open]"),
      closeModalBtn: document.querySelector("[data-mod-about-close]"),
      modal: document.querySelector("[data-mod-about]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();