'use strict';
/* 
const bookings = [];

// DEFAULT PARAMETERS (ES6) passengersNum = 1, price = 199
const createBooking = function (
  flightNum,
  passengersNum = 1,
  price = 199 * passengersNum
) {
  // DEFAULT PARAMETERS (ES5)
  // passengersNum = passengersNum || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // { flightNum: 'LH123', passengersNum: 1, price: 199 }
createBooking('LH123', 2, 800); // { flightNum: 'LH123', passengersNum: 2, price: 800 }
createBooking('LH123', 2); // { flightNum: 'LH123', passengersNum: 2, price: 398 }
createBooking('LH123', 5); // { flightNum: 'LH123', passengersNum: 5, price: 995 }

// SKIP DEFAULT PARAMETER
createBooking('LH123', undefined, 1000); // { flightNum: 'LH123', passengersNum: 1, price: 1000 }
 */
/* 
// HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE
// PASSING BY VALUE AND PASSING BY REFERENCE
// JAVASCRIPT DOES NOT HAVE PASSING BY REFERENCE ONLY PASSING BY VALUE
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  passenger.passport === 1234567890
    ? console.log(`Checked in on flight ${flightNum}`)
    : console.log('Wrong passport!');
};

checkIn(flight, jonas); // Checked in on flight LH999

// flight IS A PRIMITIVE TYPE - WE PASS ITS COPY AS THE ARGUMENT
console.log(flight); // LH234
// THE SAME AS:
const flightNum = flight;

// jons IS A REFERENCE TYPE - WE PASS ITS REFERENCE AS THE ARGUMENT
console.log(jonas); // { name: 'Mr. Jonas Schmedtmann', passport: 1234567890 }
// THE SAME AS:
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas); // Wrong passport!
 */
/* 
// FIRST-CLASS AND HIGHER-ORDER FUNCTIONS

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// HIGHER-ORDER FUNCTION
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// oneWord and upperFirstWord are CALLBACK FUNCTIONS

// JavaScript USES CALLBACKS ALL THE TIME
const high5 = function () {
  console.log('🖐');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// transformer, addEventListener and forEach are HIGHER-ORDER FUNCTIONS
 */
/* 
// FUNCTIONS RETURNING FUNCTIONS
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven

greet('Hello')('Martha'); // Hello Martha

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jack'); // Hi Jack
 */
/* 
//  THE CALL AND APPLY METHODS
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// NOW IT'S NOT A METHOD JUST A COPIED FUNCTION - A REGULAR FUNCTION CALL
// THIS KEYWORD INSIDE OF IT WILL NOW POINT TO UNDEFINED
// book(23, 'Sarah Williams'); // TypeError: Cannot read property 'airline' of undefined

// THE CALL METHOD ALLOWS US TO EXPLICITLY SET THE 'THIS' KEYWORD OF ANY FUNCTION THAT WE WANT TO CALL
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// THE APPLY METHOD TAKES AN ARRAY OF ARGUMENTS
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// MODERN JS APPROACH
book.call(swiss, ...flightData);
console.log(swiss);

// THE BIND METHOD
// DOES NOT IMMEDIATELY CALL THE FUNCTION
// IT RETURNS A NEW FUNCTION WHERE 'THIS' KEYWORD IS BOUND
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);

// ALLOWS US TO SET IN STONE, CERTAIN ARGUMENTS
// SPECIFYING PARTS OF THE ARGUMENTS BEFOREHEAD IS ACTUALLY A COMMON PATTERN CALLED PARTIAL APPLICATION
// PARTIAL APPLICATION MEANS THAT A PART OF THE ARGUMENTS OF THE ORIGINAL FUNCTION ARE ALREADY APPLIED (ALLREADY SET)
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// USING OBJECTS WITH EVENT LISTENERS
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();
// {airline: "Lufthansa", iataCode: "LH", bookings: Array(3), planes: 300, book: ƒ, …}
// 301

// IN EVENT HANDLER FUNCTION 'THIS' KEYWORD ALWAYS POINTS TO THE ELEMENT ON WHICH THAT HANDLER IS ATACHED TO
// INSIDE OF THIS FUNCTION 'THIS' KEYWORD WILL POINT TO THE BUTTON ELEMENT
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// <button class="buy">Buy new plane 🛩</button>
// NaN

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// {airline: "Lufthansa", iataCode: "LH", bookings: Array(3), planes: 300, book: ƒ, …}
// 301

// PARTIAL APPLICATION
// WE WANT TO PRESET THE RATE VALUE SO IT HAS TO BE THE FIRST ARGUMENT
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// HERE WITH THE BIND METHOD WE CREATE A NEW SPECIFIC FUNCTION FROM ORIGINAL FUNCTION
const addVAT = addTax.bind(null, 0.23);
// THE SAME AS:
// addTax = value => value + value * 0.23;

console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29

// THE SAME AS WE DID ABOVE
const addTaxNew = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxNew(0.23);
console.log(addVAT2(100)); // 123
console.log(addVAT2(23)); // 28.29
 */

// CHALLENGE #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/* 
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `${this.question}\n${this.options.join('\n')}${'\n(Write option number)'}`
    );
    answer >= 0 && answer <= this.answers.length - 1 && answer !== null
      ? this.answers[answer]++
      : alert('Try again');
    this.displayResults(this.answers);
  },
  displayResults(answers) {
    Array.isArray(answers) && console.log(answers);
    typeof answers === 'string' && console.log(`Poll results are ${answers}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call(poll, [5, 2, 3]);
poll.displayResults.call(poll, [1, 5, 3, 9, 6, 1].join(', '));
 */
/* 
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate); // ReferenceError: isPrivate is not defined

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 34;
}
// console.log(isPrivate); // ReferenceError: isPrivate is not defined
console.log(notPrivate); // 34
 */

// CLOSURES
/* 
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

// CLOSURES HAVE ACCESS TO THE VARIABLES THAT WERE PRESENT AT THE TIME THE FUNCTION WAS CREATED
// A CLOSURE MAKES A FUNCTION REMEMBER ALL THE VARIABLES THAT EXISTED AT THE FUNCTION'S BIRTHPLACE
booker();
booker();
booker();

// A FUNCTION HAS ACCESS TO THE VARIABLE ENVIRONMENT (VE) OF THE EXECUTION CONTENT IN WHICH IT WAS CREATED
// EVEN AFTER THAT EXECUTION CONTEXT HAS GONE
// CLOSURE: VE ATTACHED TO THE FUNCTION, EXACTLY AS IT WAS AT THE TIME AND PLACE THE FUNCTION WAS CREATED

console.dir(booker);
// IN THE BROWSER CONSOLE
// WHENEVER YOU SEE THESE BRACKETS HERE THAT MEANS THAT IT IS AN INTERNAL PROPERTY WHICH WE CANNOT ACCESS FROM OUR CODE
// [[Scopes]]
// Closure (secureBooking) {passengerCount: 3}
 */
// MORE CLOSER EXAMPLES
// EXAMPLE 1
/* 
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

// ASSIGNING f FUNCTION
// CLOSED OVER THE VARIABLE ENVIRONMENT OF g FUNCTION
g(); // ALREADY FINISHED ITS EXECUTION
f(); // 46
console.dir(f);
// IN THE BROWSER CONSOLE
// [[Scopes]]
// Closere (g) {a: 23}

// RE-ASSIGNING f FUNCTION
// CLOSED OVER THE VARIABLE ENVIRONMENT OF h FUNCTION
h(); // ALREADY FINISHED ITS EXECUTION
f(); // 1554
console.dir(f);

// IN THE BROWSER CONSOLE
// [[Scopes]]
// Closere (h) {b: 777}
 */
// EXAMPLE 2
/* 
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// CLOSERE HAVE PRIORITY OVER THE SCOPE CHAIN
const perGroup = 1000; // IF THE SCOPE CHAIN HAD PRIORITY OVER THE CLOSURE THEN THIS CALLBACK FUNCTION WOULD USE THIS VARIABLE
boardPassengers(180, 3);
 */
/* 
// CHALLENGE #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
 */
