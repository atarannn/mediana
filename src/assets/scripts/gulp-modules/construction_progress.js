function popupOpen(popup) {
  popup.forEach(el => {
    popupOpenAnim();
    document.querySelector('body').style.overflow = 'hidden';
  });
}

function popupClose(popup) {
  popup.forEach(el => {
    popupCloseAnim();
    document.querySelector('body').style.overflow = 'auto';
  });
}

function popupOpenAnim(evt, reverseArg) {
  const popup = document.querySelectorAll('[data-construction-progress]');
  const tl = gsap.timeline({ paused: true });
  tl.add(() => {
    popup.forEach(el => {
      el.classList.add('active');
    });
  });
  tl.fromTo(popup, {autoAlpha: 0},
    {autoAlpha: 1,  ease: 'power4.easeInOut', duration: 0.4 }, '<');
  tl.play();
}

function popupCloseAnim(evt, reverseArg) {
  const popup = document.querySelector('[data-construction-progress]');
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(popup, {autoAlpha: 1},
    { ease: 'power4.easeInOut', duration: 0.2, autoAlpha: 0 }, '<');
  tl.add(() => {
    popup.classList.remove('active');
  });
  tl.play();
}

function popupInit() {
  const popup = document.querySelectorAll('[data-construction-progress]');
  document.querySelectorAll('[data-open-construction-progress]').forEach(elem => {
    elem.addEventListener('click', () => popupOpen(popup));
  });
  document.querySelectorAll('[data-close-construction-progress]').forEach(elem => {
    elem.addEventListener('click', () => popupClose(popup));
  });
}


function init() {
  popupInit();
}

window.addEventListener('DOMContentLoaded', init);

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: document.querySelector('[data-swiper-next]'),
    prevEl: document.querySelector('[data-swiper-prev]'),
  },
  pagination: {
    type: 'fraction',
  },
  lazy: true,
  speed: 400,
  watchSlidesVisibility: true,
});

