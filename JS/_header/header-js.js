// window.onscroll = () => changeHeaderBackground();

// function changeHeaderBackground() {
//   const header = document.querySelector('[data-header]');
//   const headerOffsetTrigger = header.offsetHeight;
//   const pageOffset = window.pageYOffset;

//   if (pageOffset > headerOffsetTrigger) {
//     header.classList.add('no-transparency');
//   } else {
//     header.classList.remove('no-transparency');
//   }
// }

(() => {
    document.querySelector('.js-speaker-form').addEventListener('submit', e => {
        e.preventDefault();

        new FormData(e.currentTarget).forEach((value, name) =>
            console.log(`${name}: ${value}`),
        );

        e.currentTarget.reset();
    });
})();


