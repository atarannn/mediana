function formOpen(form) {
    form.forEach(el => {
        formOpenAnim();
        document.querySelector('body').style.overflow = 'hidden';
    });
}

function formClose(form) {
    form.forEach(el => {
        formCloseAnim();
        document.querySelector('body').style.overflow = 'auto';
    });
}

function formOpenAnim(evt, reverseArg) {
    const form = document.querySelectorAll('[data-form-wrapper]');
    const formInfo = document.querySelector('.form');
    const formClose = document.querySelector('[data-close-form]');
    const tl = gsap.timeline({ paused: true });
    tl.add(() => {
        form.forEach(el => {
            el.classList.add('active');
        });
    });
    tl.fromTo(form, {x: 0, autoAlpha: 0},
        { x: 0, autoAlpha: 1,  ease: 'power4.easeInOut', duration: 0.4, clearProps: 'all' }, '<');
    tl.fromTo(formInfo, {x: 3000},
        { x: 0, ease: 'power4.easeInOut', duration: 0.4, delay: 0.4, clearProps: 'all' }, '<');
    tl.fromTo(formClose, {y: -200},
        { y: 0, ease: 'power4.easeInOut', duration: 0.4, delay: 0.4, clearProps: 'all' }, '<');
    tl.play();
}

function formCloseAnim(evt, reverseArg) {
    const form = document.querySelector('[data-form-wrapper]');
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(form, {autoAlpha: 1},
        { autoAlpha: 0, ease: 'power4.easeInOut', duration: 0.2 }, '<');
    tl.add(() => {
        form.classList.remove('active');
    });
    tl.play();
}

function formInit() {
    const form = document.querySelectorAll('[data-form-wrapper]');
    document.querySelectorAll('[data-call-form]').forEach(elem => {
        elem.addEventListener('click', () => formOpen(form));
    });
    document.querySelectorAll('[data-close-form]').forEach(elem => {
        elem.addEventListener('click', () => formClose(form));
    });
}


function init() {
    formInit();
}

window.addEventListener('DOMContentLoaded', init);
