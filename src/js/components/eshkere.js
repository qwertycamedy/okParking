const accordions = document.querySelectorAll('.card__item');

accordions.forEach(item => {
  item.addEventListener('click', (e) => {
    const self = e.currentTarget,
      contentAll = document.querySelectorAll('.card__text-link'),
      content = self.querySelector('.card__text-link');

    accordions.forEach(item => {
        if (item != self) {
            item.classList.remove('active');
        }
    });
    contentAll.forEach(item => {
      item.style.maxHeight = null;
    });

    self.classList.toggle('active');

    if (self.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});