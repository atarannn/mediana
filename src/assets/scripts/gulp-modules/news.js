const list = document.querySelectorAll('.news-card');
const btnNews = document.querySelectorAll('[data-view]');
btnNews.forEach(el => el.addEventListener('click', (event) => {
  if (event.target.tagName != 'BUTTON') return false;
  const target = event.target.dataset.view;
  console.log(target);
  btnNews.forEach(button => {
    console.log(button);
    button.classList.remove('active');
  });
  el.classList.add('active');
  list.forEach((elem) => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(target) && target != 'all') {
      elem.classList.add('hide');
    }
  });
}));
