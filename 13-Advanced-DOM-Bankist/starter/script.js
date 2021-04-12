'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// CHAPTER: SELECTING, CREATING AND DELETING ELEMENTS
/* 
// ---SELECTING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// RETURNS STATIC NODE LIST
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); // NodeList(4)

document.getElementById('section--1');

// RETURNS LIVE HTML COLLECTION
const allButtonsByTagName = document.getElementsByTagName('button');
console.log(allButtonsByTagName); // HTMLCollection(9)
const allButtonsByClassName = document.getElementsByClassName('btn');
console.log(allButtonsByClassName); // HTMLCollection(5)

// ---CREATING AND INSERTING ELEMENTS
// .insertAdjacentHTML

// ---INSERT ELEMENTS AS CHILDREN
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message); // ADDS THE ELEMENT AS THE FIRST CHILD OF THIS PARENT ELEMENT
// header.append(message); // ADDS THE ELEMENT AS THE LAST CHILD OF THIS PARENT ELEMENT
// IT'S A LIVE ELEMENT LIVING IN THE DOM SO IT MOVES IT FROM THE FIRST CHILD TO THE LAST CHILD POSITION
// IT CANNOT BE AT MULTIPLE PLACES AT THE SAME TIME
// WE CAN USE THE APPEND AND PREPEND METHODS NOT ONLY TO INSERT ELEMENTS BUT ALSO TO MOVE THEM
// THAT IS BECAUSE THE DOM ELEMENT IS UNIQUE
// IT CAN ALWAYS ONLY EXIST AT ONE PLACE AT A TIME

// ---TO INSERT MULTIPLE ELEMENTS WE WOULD HAVE TO FIRST COPY THE FIRST ELEMENT
// header.prepend(message.cloneNode(true));

// ---INSERT ELEMENTS AS SIBLINGS
header.before(message); // INSERTS BEFORE HEADER ELEMENT
// header.after(message.cloneNode(true)); // INSERTS COPY AFTER HEADER ELEMENT

// ---DELETE ELEMENTS
document
  .querySelector('.btn--close-cookie')
  // MODERN WAY OF REMOVING ELEMENTS
  // .addEventListener('click', () => message.remove());
  .addEventListener('click', function () {
    message.parentElement.removeChild(message);
  });
 */
