'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

const clickToOpen = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const clickToClose = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', clickToOpen);
}

closeBtn.addEventListener('click', clickToClose);
overlay.addEventListener('click', clickToClose);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      console.log(!modal.classList.contains('hidden'));
      clickToClose();
    }
  }
});

console.log(!modal.classList.contains('hidden'));
