(() => {
    const refs = {
      openModalBtn: document.querySelector("[header-mod-open]"),
      closeModalBtn: document.querySelector("[header-mod-close]"),
      modal: document.querySelector("[header-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
    
  