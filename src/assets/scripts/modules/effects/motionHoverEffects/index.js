import imagesLoaded from 'imagesloaded';
import StretchEffect from './StretchEffect.js';

/**
 * 
 * @param {*} container - Контейнер куда вставляется канвас
 * @param {*} itemsWrapper - контейнер с пунктами подсветки
 * Структура елемента, при наведении на который будет происходить плавание картинки
 * <[tag] class="link">
 *      <img src="" картинку можно скрыть любым методом, кроме display: none/>
 * <[tag]/>
 */
export default function motionHoverEffect(container, itemsWrapper) {
    // const container = document.body
    // const itemsWrapper = document.querySelector('.grid');
    
    // Preload images
    const preloadImages = () => {
        return new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll('img'), resolve);
        });
    };
    // And then..
    preloadImages().then(() => {
        // Remove the loader
        document.body.classList.remove('loading');
        const effect = new StretchEffect(container, itemsWrapper)
    });
}

