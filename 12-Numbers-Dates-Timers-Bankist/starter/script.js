'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-04-03T17:08:56.566Z',
    '2021-04-08T17:08:56.566Z',
    '2021-04-09T17:08:56.566Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const getFullDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'today';
  if (daysPassed === 1) return 'yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  // const hour = `${date.getHours()}`.padStart(2, 0);
  // const min = `${date.getMinutes()}`.padStart(2, 0);
  // return `${day}/${month}/${year}, ${hour}:${min}`;
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${getFullDate(date, acc.locale)}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);

  // Colorize rows
  // colorizeEvenRows();
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// EXPEREMENTING API
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: '2-digit',
//   weekday: 'short',
// };
// GETTING LOCALE
// const locale = navigator.language;
// console.log(locale); // ru-RU
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

// labelDate.textContent = getFullDate(now);
// As of 05/03/2037

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'short',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// CHAPTER: CONVERTING AND CHECKING NUMBERS
/* 
// ---IN JAVASCRIPT ALL NUMBERS ARE PRESENTED INTERNALLY AS FLOATING POINT NUMBERS - ALWAYS DECIMALS
console.log(23 === 23.0); // true

// CANNOT REPRESENT CERTAIN FRACTIONS
// BASE 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// BINARY BASE 2 - 0 1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// ---CONVERSION
console.log(Number('23'));
// JS DOES TYPE COERCION
console.log(+'23');

// ---PARSING
// IN ORDER TO WORK STRING NEEDS TO START WITH A NUMBER
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseInt('101101101example', 2)); // 365

console.log(Number.parseInt('  2.5rem  ')); // 2
console.log(Number.parseFloat('  2.5rem  ')); // 2.5

// CHECK IF A VALUE IS NOT A NUMBER - NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false

// THE BEST WAY OF CHECKIN IF A VALUE IS A NUMBER
// IF IT'S A REAL NUMBER - NOT A STRING
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
console.log(Number.isInteger('23')); // false
 */
// CHAPTER: MATH AND ROUNDING
/* 
// ---CALCULATE SQUARE ROOT
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
// THE ONLY WAY TO CALCULATE THE CUBIC ROOT
console.log(8 ** (1 / 3)); // 2

// ---MAX OR MIN VALUE
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

// ---CALCULATE THE AREA OF A CIRCLE WITH RADIUS OF 10PX
console.log(Math.PI * Number.parseInt('10px') ** 2); // 314.1592653589793

// ---GENERATE RANDOM NUMBER BETWEEN 0 AND 1
console.log(Math.random()); // FROM 0 T0 1 (-1)
console.log(Math.trunc(Math.random() * 6) + 1); // FROM 1 TO 6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt(10, 20)); // FROM 10 T0 20

// ---ROUNDING INTEGERS: ALSO DOES TYPE COERCION
console.log(Math.trunc('23.3')); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// ---ROUNDING DECIMALS: RETURNS AS A STRING
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)); // 2.35 (A NUMBER)
 */
// CHAPTER: THE REMAINDER OPERATOR
/* 
console.log(5 % 2); // 1 (2 * 2 + 1)
console.log(5 / 2); // 2.5

console.log(8 % 3); // 2 (3 * 2 + 2)
console.log(8 / 3); // 2.6666666666666665

// CHECK IF A NUMBER EVEN OR ODD
console.log(6 % 2); // 0 (2 * 3) EVEN NUMBER
console.log(6 / 2); // 3

console.log(7 % 2); // 1 (2 * 3 + 1) ODD NUMBER

const isEven = n => n % 2 === 0;

console.log(isEven(6)); // true
console.log(isEven(7)); // false

// COLORIZE ROWS IN MOVEMENTS
const colorizeEvenRows = function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    // EVEN ROWS 0, 2, 4, 6
    i % 2 === 0 && (row.style.backgroundColor = 'orangered');
    // ROWS 3, 6, 9, 12
    i % 3 === 0 && (row.style.backgroundColor = 'blue');
  });
};

labelBalance.addEventListener('click', colorizeEvenRows);
 */
// CHAPTER: WORKING WITH BIGINT
/* 
// NUMBERS ARE REPRESENTED INTERNALLY AS 64 BITS - 64 ONES OR ZEROS
// NOW OF THESE 64 BITS ONLY 53 ARE USED TO ACTUALLY STORE THE DIGITS THEMSELVES
// THE REST ARE FOR STORING THE POSITION OF THE DECIMAL POINT AND THE SIGN
// THERE IS A LIMIT OF HOW BIG NUMBERS CAN BE
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// ---UNSAFE AREA
console.log(2 ** 53); // 9007199254740992 IS CORRECT
console.log(2 ** 53 + 1); // 9007199254740992 IS INCORRECT
console.log(2 ** 53 + 2); // 9007199254740994 IS CORRECT
console.log(2 ** 53 + 3); // 9007199254740996 IS INCORRECT
console.log(2 ** 53 + 4); // 9007199254740996 IS CORRECT

// ---WE ALSO CANNOT REPRESENT THE BIG INTEGERS AS NUMBERS
console.log(12987124505804385971859187534587787); // 1.2987124505804385e+34

// ---BIGINT: NOW WE CAN
console.log(12987124505804385971859187534587787n); // 12987124505804385971859187534587787n
console.log(2n ** 154n); // 22835963083295358096932575511191922182123945984n IS CORRECT
console.log(2n ** 154n + 1n); // 22835963083295358096932575511191922182123945985n IS CORRECT
console.log(2n ** 154n + 2n); // 22835963083295358096932575511191922182123945986n IS CORRECT

// ---OPERATIONS
console.log(
  22835963083295358096932575511191922182123945985n +
    22835963083295358096932575511191922182123945986n
); // 45671926166590716193865151022383844364247891971n IS CORRECT

// WE ALSO CANNOT USE:
// console.log(Math.sqrt(10n)); // Uncaught TypeError: Cannot convert a BigInt value to a number

// ---EXCEPTIONS
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true

console.log(12119292042112323123123n + 'is REALLY big!!!'); // 12119292042112323123123is REALLY big!!!

// ---DIVISION
console.log(11n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335
 */
// CHAPTER: CREATING DATES
/* 
// ---CREATE A DATE
const now = new Date();
console.log(now); // Fri Mar 26 2021 16:26:34 GMT+0300 (Moscow Standard Time)
// ---PARSE THE DATE FROM A DATE STRING
console.log(new Date('Aug 02 2020 18:05:41')); // Sun Aug 02 2020 18:05:41 GMT+0300 (Moscow Standard Time)
// IT CAN BE QUITE UNRELIABLE
console.log(new Date('December 24, 2015')); // Thu Dec 24 2015 00:00:00 GMT+0300 (Moscow Standard Time)
// PARSE FROM JS CREATED DATE
console.log(account1.movementsDates[0]); // 2019-11-18T21:31:17.178Z
console.log(new Date(account1.movementsDates[0])); // Tue Nov 19 2019 00:31:17 GMT+0300 (Moscow Standard Time)
// MONTHS IN JS 0 BASED - NOVEMBER IS 11
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+0300 (Moscow Standard Time)
// AUTO CORRECTS THE DAY - NOVEMBER ONLY HAS 30 DAYS
console.log(new Date(2037, 10, 31)); // Tue Dec 01 2037 00:00:00 GMT+0300 (Moscow Standard Time)
// UNIX TIME
console.log(new Date(0)); // Thu Jan 01 1970 03:00:00 GMT+0300 (Moscow Standard Time)
// 3 DAYS IN MILLISECONDS 259200000 - TIMESTAMP
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 03:00:00 GMT+0300 (Moscow Standard Time)

// WORKING WITH DATES
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future); // Thu Nov 19 2037 15:23:05 GMT+0300 (Moscow Standard Time)
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 (+1)
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 5
// AN INTERNATIONAL STANDARD STRING
console.log(future.toISOString()); // 2037-11-19T12:23:05.000Z
// GET TIMESTAMP FOR THE DATE - MILLISECONDS WHICH HAVE PASSED SINCE JANUARY 1, 1970
console.log(future.getTime()); // 2142246185000
// RETURNS THE SAME DATE AS ABOVE
console.log(new Date(2142246185000)); // Thu Nov 19 2037 15:23:05 GMT+0300 (Moscow Standard Time)
// GET CURRENT TIMESTAMP
console.log(Date.now()); // 1616768753913
// TO CALCULATE YEARS FROM TIMESTAMP 1616768753913/365/24/60/60/1000 = 51.2674008724315

// TO CHANGE DATE
// IT WILL CORRECT THE WEEKDAY ACCORDINGLY
future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:23:05 GMT+0300 (Moscow Standard Time)
 */

// CHAPTER: OPERATIONS WITH DATES
/* 
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // Thu Nov 19 2037 15:23:00 GMT+0300 (Moscow Standard Time)
console.log(+future); // 2142246180000

const calcDaysPassed = (date1, date2) =>
  // RETURN DAYS FROM MILLISECONDS
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
const days2 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));

console.log(days1); // 10
console.log(days2); // 10
 */

// CHAPTER: INTERNATIONALIZING DATES (INTL)
/* 
const now = new Date();
console.log(now); // 2021-04-10T17:32:24.384Z

console.log(new Intl.DateTimeFormat('en-US').format(now)); // 4/10/2021

console.log(new Intl.DateTimeFormat('en-GB').format(now)); // 10/04/2021

console.log(new Intl.DateTimeFormat('ru-RU').format(now)); // 10.04.2021
*/

// CHAPTER:INTERNATIONALIZING NUMBERS (INTL)
/* 
const num = 3884764.23;
const locale = navigator.language;

console.log(new Intl.NumberFormat(locale).format(num));

const options = {
  style: 'currency',
  currency: 'EUR',
  useGrouping: false,
};

console.log(new Intl.NumberFormat(locale, options).format(num));
 */

// CHAPTER: TIMERS: SETTIMEOUT AND SETINTERVAL

// ---SETTIMEOUT
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
ingredients.includes('spinach') && clearTimeout(pizzaTimer);
console.log('Waiting...');

// ---SETINTERVAL
setInterval(function () {
  const now = new Date();
  const locale = navigator.language;
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const currentTime = Intl.DateTimeFormat(locale, options).format(now);
  console.log(currentTime);
}, 1000);
