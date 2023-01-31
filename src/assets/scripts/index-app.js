import i18next from 'i18next';
import gsap from 'gsap';
import axios from 'axios';
import * as yup from 'yup';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';
import ScrollTrigger from 'gsap/ScrollTrigger';
import hoverEffect from 'hover-effect';

global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
global.axios = axios;

const isDev = document.documentElement.dataset.mode === 'dev';

const isMobile = window.matchMedia('(max-width: 1024px)').matches;

const section2FirstBlockImage =  {
  dev: () => isMobile ? './assets/images/home/section-2/1-mobile.jpg' : './assets/images/home/section-2/1.jpg',
  prod: () => isMobile ? '/wp-content/themes/3d/assets/images/home/section-2/1-mobile.jpg' : '/wp-content/themes/3d/assets/images/home/section-2/1.jpg',
}
var myAnimation = new hoverEffect({
  parent: document.querySelector('.js-hover-card-animation'),
  intensity: 0.3,
  imagesRatio: 0.85,
  image1: isDev ? section2FirstBlockImage.dev() : section2FirstBlockImage.prod(),
  image2: isDev ? './assets/images/home/section-2/1-2.jpg' : '/wp-content/themes/3d/assets/images/home/section-2/1-2.jpg',
  displacementImage: isDev ? './assets/images/home/section-2/1-2.jpg' : '/wp-content/themes/3d/assets/images/home/section-2/1-2.jpg'
});

const section2SecondBlockImage =  {
  dev: () => isMobile ? './assets/images/home/section-2/2-mobile.jpg' : './assets/images/home/section-2/2.jpg',
  prod: () => isMobile ? '/wp-content/themes/3d/assets/images/home/section-2/2-mobile.jpg' : '/wp-content/themes/3d/assets/images/home/section-2/2.jpg',
}

var myAnimation2 = new hoverEffect({
  parent: document.querySelector('.js-hover-card-animation2'),
  intensity: 0.3,
  imagesRatio: 0.85,
  image1: isDev ? section2SecondBlockImage.dev() : section2SecondBlockImage.prod(),
  image2: isDev ? './assets/images/home/section-2/2-2.jpg' : '/wp-content/themes/3d/assets/images/home/section-2/2-2.jpg',
  displacementImage: isDev ? './assets/images/home/section-2/2-2.jpg' : '/wp-content/themes/3d/assets/images/home/section-2/2-2.jpg'
});

var myAnimation3 = new hoverEffect({
  parent: document.querySelector('.js-hover-card-animation3'),
  intensity: 0.3,
  imagesRatio: 0.85,
  image1: isDev ? './assets/images/home/section-4/1.jpg' : '/wp-content/themes/3d/assets/images/home/section-4/1.jpg',
  image2: isDev ? './assets/images/home/section-4/1-2.jpg' : '/wp-content/themes/3d/assets/images/home/section-4/1-2.jpg',
  displacementImage: isDev ? './assets/images/home/section-4/1-2.jpg' : '/wp-content/themes/3d/assets/images/home/section-4/1-2.jpg'
});

var myAnimation4 = new hoverEffect({
  parent: document.querySelector('.js-hover-card-animation4'),
  intensity: 0.3,
  imagesRatio: 0.85,
  image1: isDev ? './assets/images/home/section-4/2.jpg' : '/wp-content/themes/3d/assets/images/home/section-4/2.jpg',
  image2: isDev ? './assets/images/home/section-4/2-2.jpg' : '/wp-content/themes/3d/assets/images/home/section-4/2-2.jpg',
  displacementImage: isDev ? './assets/images/home/section-4/2-2.jpg' : '/wp-content/themes/3d/assets/images/home/section-4/2-2.jpg'
});

const form = [
  '[data-form]',
];

form.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function callThanksPopup(callSelector, contentToOpenSelector, closeSelector) {
            const submitBtn = document.querySelectorAll(callSelector);
            const callContent = document.querySelector('[data-form]');
            const content = document.querySelector(contentToOpenSelector);
            const close = document.querySelectorAll(closeSelector);

            submitBtn.forEach(elem => {
              content.classList.add('active');
              callContent.classList.add('not-active');
            });

            close.forEach(elem => {
              elem.addEventListener('click', () => {
                content.classList.remove('active');
                callContent.classList.remove('not-active');
              });
            });
          }
          callThanksPopup('[data-btn-submit]','[data-thanks]','[data-close-form]');
          },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          mail: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-mail]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('mail'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },
      },
    });

    $form.querySelectorAll('.js-mask-absolute').forEach(el => {
      el.addEventListener('click', () => {
        $form.querySelector('[name="phone"]').focus();
        $form.querySelector('.js-mask-absolute').style.display = 'none';
      }, false);
    })
  }
});

