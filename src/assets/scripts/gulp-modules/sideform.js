function formMobOpenAnim(evt, reverseArg) {
  const form = document.querySelector('.sideform');
  if  (form === null) return;
  const tl = gsap.timeline({ paused: true });
  tl.add(() => {
    form.classList.add('active');
  });
  tl.fromTo(form, {autoAlpha: 0},
    { autoAlpha: 1, ease: 'power4.easeInOut', duration: 0.5, clearProps: 'all' });
  tl.play();
}

function formMobCloseAnim(evt, reverseArg) {
  const form = document.querySelector('.sideform');
  if  (form === null) return;
  const ease = 'power4.easeOut';
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(form, { autoAlpha: 1},
    { ease: 'power4.easeInOut', duration: 0.5, autoAlpha: 0, delay: 0.1 }, '<');
  tl.add(() => {
    form.classList.remove('active');
  });
  tl.play();
}

const btnCallMobile = document.querySelectorAll('.js-mobile-call');
const btnCloseMobile = document.querySelector('.js-mobile-close');
const formMobile = document.querySelector('.sideform');
const formCallMobile = document.querySelector('.js-mobile-form');
const form = document.querySelector('[data-form-wrapper]');

formCallMobile.addEventListener('click', () => {
  document.querySelector('body').style.overflow = 'hidden';
  formOpenAnim();
  formMobCloseAnim();
});

btnCallMobile.forEach(btn => {
  btn.addEventListener('click', () => {
    formMobile.classList.add('active');
    formMobOpenAnim();
    document.querySelector('body').style.overflow = 'hidden';
  });
})

btnCloseMobile.addEventListener('click', () => {
  formMobCloseAnim();
  document.querySelector('body').style.overflow = 'auto';
});
