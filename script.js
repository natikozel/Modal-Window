'use strict';

const allModalButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = () => {

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i =0; i<allModalButtons.length; i++)
  allModalButtons[i].addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});