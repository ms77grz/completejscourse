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

// CHAPTER: SELECTING, CREATING, AND DELETING ELEMENTS

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.append(message);
// ---STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// ---WE CAN READ ONLY INLINE STYLES AND CANNOT GET A STYLE THAT IS HIDDEN INSIDE OF A CLASS
console.log(message.style.color); // EMPTY LINE
console.log(message.style.backgroundColor); // rgb(55, 56, 61)
// ---IF WE REALLY NEED TO GET STYLES USING GETCOMPUTEDSTYLE FUNCTION
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 50px - RETURNS STRING

// ---WE CAN CHANGE THE HEIGHT BY ADDING A VALUE TO THE CURRENT VALUE
// message.style.height = '23.33252px';
console.log(Number.parseFloat(getComputedStyle(message).height)); // 50 - NOW RETURNS NUMBER
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';
console.log(message.style.height); // 80px - NOW WE CAN ACCESS TO INLINE STYLE

// ---CSS CUSTOM PROPERTIES / CSS VARIABLES
// IN CSS custom variables are in :root
document.documentElement.style.setProperty('--color-primary', 'orangered');

// ---ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src); // http://127.0.0.1:5500/13-Advanced-DOM-Bankist/starter/img/logo.png - ABSOLUTE URL
console.log(logo.className); // nav__logo

logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt); // Beautiful minimalist logo

// ---TO READ NON-STANDARD ATTRIBUTES
//<img
//  src="img/logo.png"
//  alt="Bankist logo"
//  class="nav__logo"
//  id="logo"
//  designer="Jonas"
///>;
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Jonas

// ---WE CAN SET ATTRIBUTE TO AN ELEMENT
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company')); // Bankist

console.log(logo.getAttribute('src')); // img/logo.png - RELATIVE URL

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // http://127.0.0.1:5500/13-Advanced-DOM-Bankist/starter/index.html#
console.log(link.getAttribute('href')); // #

// ---DATA ATTRIBUTES
//<img
//  src="img/logo.png"
//  alt="Bankist logo"
//  class="nav__logo"
//  id="logo"
//  designer="Jonas"
//  data-version-number="3.0"
///>;
console.log(logo.dataset); // DOMStringMap {versionNumber: "3.0"}
console.log(logo.dataset.versionNumber); // 3.0

// ---CLASSES
logo.classList.add('nav__logo--primary', 'nav__logo--secondary'); // WE CAN ADD ONE OR MULTIPLE CLASSES TO EXISTING
console.log(logo.className); // nav__logo nav__logo--primary nav__logo--secondary
logo.classList.remove('nav__logo--primary', 'nav__logo--secondary'); // WE CAN REMOVE ONE OR MULTIPLE CLASSES FROM EXISTING
console.log(logo.className); // nav__logo
logo.classList.toggle('nav__logo--primary'); // ADDS CLASS IF IT DOESN'T EXIST
console.log(logo.className); // nav__logo nav__logo--primary
logo.classList.toggle('nav__logo--primary'); // REMOVES CLASS IF IT EXISTS
console.log(logo.className); // nav__logo
console.log(logo.classList.contains('nav__logo')); // true

// DO NOT USE BECAUSE IT WILL OVERWRITE THE EXISTING CLASSES FROM THE ELEMENT
logo.className = 'nav__logo--secondary';
console.log(logo.className); // nav__logo--secondary
