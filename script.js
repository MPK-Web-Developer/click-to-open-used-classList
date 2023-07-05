const bannerItemLink = document.querySelectorAll('.banner-item-link');
const bannerPopupAll = document.querySelectorAll('.banner-popup');
const closePopupAll = document.querySelectorAll('.close-popup');
const popupOverlay = document.querySelector('.popup-overlay');

bannerItemLink.forEach((item, index) => {
  item.addEventListener('click', () => {
    bannerPopupAll.forEach(item => {
      !item.classList.contains('popup-hidden')
        ? item.classList.add('popup-hidden')
        : '';
      popupOverlay.classList.add('popup-hidden');
    });
    bannerPopupAll[index].classList.contains('popup-hidden')
      ? bannerPopupAll[index].classList.remove('popup-hidden')
      : '';
    popupOverlay.classList.remove('popup-hidden');
  });
});
closePopupAll.forEach((item, index) => {
  item.addEventListener('click', () => {
    !bannerPopupAll[index].classList.contains('popup-hidden')
      ? bannerPopupAll[index].classList.add('popup-hidden')
      : '';
    popupOverlay.classList.add('popup-hidden');
  });
});
