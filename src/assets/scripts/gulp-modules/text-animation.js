window.addEventListener('load', () => {
  function splitToLinesAndFadeUp(selector, $scroller) {
    document.querySelectorAll(selector).forEach(text => {
      let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      if (mathM === null) return;
      mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
      text.innerHTML = mathM.join(' ');

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: document.body,
            trigger: text,
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, delay: 1, stagger: 0.05, duration: 1.3, ease: "power4.out" }
        );
    });
  }
  splitToLinesAndFadeUp('.section-3-right-info .dark-title, .section-3-right-info .subtitle-text-20, .section-5 .dark-title, .section-6 .dark-title, .breadcrumbs-wrapper .dark-title, .about-top .dark-title-2, .terms-card-info .dark-title-2, .infractructure-info .dark-title-2, .infractructure-block-top .dark-text-24, .terms-title.dark-text-24, .construction_progress-top-left .dark-text-24, .developer-right .dark-text-24, .last-news .dark-title');
})
