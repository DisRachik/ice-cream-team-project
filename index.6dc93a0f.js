(()=>{const e={openModalBtn:document.querySelector("[data-modal-franchise-open]"),closeModalBtn:document.querySelector("[data-modal-franchise-close]"),modal:document.querySelector("[data-modal-franchise]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-location-open]"),closeModalBtn:document.querySelector("[data-modal-location-close]"),modal:document.querySelector("[data-modal-location]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),document.querySelector(".js-speaker-form").addEventListener("submit",(e=>{e.preventDefault(),new FormData(e.currentTarget).forEach(((e,o)=>console.log(`${o}: ${e}`))),e.currentTarget.reset()})),(()=>{const e=document.querySelector("[data-header-menu-button]"),o=document.querySelector("[data-header-menu]"),t=document.querySelector("[body-scroll-lock]");e.addEventListener("click",(()=>{const d="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!d),t.classList.toggle("is-open"),o.classList.toggle("is-open")}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-header-modal-open]"),closeModalBtn:document.querySelector("[data-header-modal-close]"),modal:document.querySelector("[data-header-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-header-mod-open]"),closeModalBtn:document.querySelector("[data-header-mod-close]"),modal:document.querySelector("[data-header-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-mod-about-open]"),closeModalBtn:document.querySelector("[data-mod-about-close]"),modal:document.querySelector("[data-mod-about]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-ingridents-modal-open]"),closeModalBtn:document.querySelector("[data-ingridents-modal-close]"),modal:document.querySelector("[data-ingridents-modal]")};function o(){e.modal.classList.toggle("ingridents-modal-is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});(()=>{const e={openModalBtn:document.querySelector("[data-ice-coffee-modal-open]"),closeModalBtn:document.querySelector("[data-ice-coffee-modal-close]"),modal:document.querySelector("[data-ice-coffee-modal]")};function o(){e.modal.classList.toggle("ice-coffee-modal-is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-milkshakes-modal-open]"),closeModalBtn:document.querySelector("[data-milkshakes-modal-close]"),modal:document.querySelector("[data-milkshakes-modal]")};function o(){e.modal.classList.toggle("milkshakes-modal-is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.6dc93a0f.js.map
