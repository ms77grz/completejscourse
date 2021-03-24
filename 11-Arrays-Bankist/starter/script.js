'use strict';

///////////////////////////////////////////////// THE BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// CHAPTER: CREATING DOM ELEMENTS DISPLAY MOVEMENTS
// CHAPTER: SORTING ARRAYS SORT MOVEMENTS

const displayMovements = function (movements, sort = false) {
  // EMPTY THE ENTIRE CONTAINER
  containerMovements.innerHTML = '';
  // SORTING MOVEMENTS
  const sortingMovements = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;
  sortingMovements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
                    <div class="movements__value">${mov}€</div>
                  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// CHAPTER: COMPUTING USERNAMES

// CREATING A FUNCTION WHICH RETURNS A NEW VALUE
// const createUsernames = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return username;
// };
// console.log(createUsernames('Steven Thomas Williams')); // stw

// UPDATING (ADDING A NEW PROPERTY) EACH ACCOUNT OBJECT IN THE ACCOUNTS ARRAY
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    // ADDING A NEW PROPERTY
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// UPDATE UI FUNCTION
const updateUI = function (account) {
  // DISPLAY MOVEMENTS
  displayMovements(account.movements);
  // DISPLAY BALANCE
  displayBalance(account);
  // DISPLAY SUMMARY
  displaySummary(account);
};

// CHAPTER: REDUSE METHOD CALCULATING BALANCE
const displayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

// CHAPTER: THE MAGIG OF CHAINING METHODS - DISPLAY SUMMARY
const displaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const expenses = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(expenses)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    // CHECK IF THE INTEREST > 1
    .filter(int => int > 1)
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest}€`;
};

// CHAPTER: IMPLEMENTING LOGIN
// EVENT HANDLER
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // PREVENT FORM FROM SUBMITTING
  e.preventDefault();
  // FIND CERTAIN ACCOUNT VIA LOGIN USERNAME
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // CHECK IF THE PIN IS CORRECT
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // DISPLAY UI
    containerApp.style.opacity = 100;
    // DISPLAY MESSAGE
    labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(' ')[0]}`;
    // CLEAR INPUT FIELDS
    inputLoginUsername.value = inputLoginPin.value = '';
    // BLUR FOCUS
    inputLoginPin.blur();
    // UPDATE UI
    updateUI(currentAccount);
  }
});

// CHAPTER: IMPLEMENTING TRANSFERS

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  // GET RECEIVER ACCOUNT VIA TRANSFER TO INPUT FIELD VALUE FROM ACCOUNTS
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // GET VALUE FROM AMOUNT INPUT FIELD
  const amount = Number(inputTransferAmount.value);
  // CLEAR INPUT FIELDS
  inputTransferTo.value = inputTransferAmount.value = '';
  // CHECK POSITIVE NUMBER & HAS ENOUGH MONEY & RECEIVER IS NOT CURRENT USER
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount &&
    receiverAccount.username !== currentAccount.username
  ) {
    // from current account
    currentAccount.movements.push(-amount);
    // to receiver
    receiverAccount.movements.push(amount);
    // UPDATE UI
    updateUI(currentAccount);
  }
});

// CHAPTER: SOME AND EVERY - LOAN

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  // IF THERE IS AT LEAST ONE DEPOSIT >= 10% OF REQUESTED AMOUNT
  const isAllowed = currentAccount.movements.some(mov => mov >= amount * 0.1);
  if (isAllowed && amount > 0) {
    currentAccount.movements.push(amount);
    // UPDATE UI
    updateUI(currentAccount);
  } else {
    console.log(`You can not loan ${amount}`);
  }
  // CLEAR INPUT FIELD
  inputLoanAmount.value = '';
});

// CHAPTER: THE FINDINDEX METHOD - CLOSE

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // FIND AND DELETE ACCOUNT BY INDEX
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );
    accounts.splice(index, 1);
    console.table(accounts);
    // HIDE UI
    containerApp.style.opacity = 0;
  }
  // CLEAR INPUT FIELDS
  inputCloseUsername.value = inputClosePin.value = '';
});

// CHAPTER: SORTING ARRAYS SORT MOVEMENTS BUTTON
let isSorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  if (isSorted) {
    isSorted = false;
    btnSort.innerHTML = '&downarrow; SORT';
  } else {
    isSorted = true;
    btnSort.innerHTML = '&uparrow; SORT';
  }
  displayMovements(currentAccount.movements, isSorted);
});

///////////////////////////////////////////////// THE BANKIST APP END

// CHAPTER: SIMPLE ARRAY METHODS
/* 
// ---SLICE DOES NOT CHANGE THE ORIGINAL ARRAY
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); // [ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)); // [ 'c', 'd' ]
console.log(arr.slice(-2)); // [ 'd', 'e' ]
console.log(arr.slice(-1)); // [ 'e' ]
console.log(arr.slice(1, -2)); // [ 'b', 'c' ]
// WE CAN USE IT TO SIMPLY CREATE A SHALLOW COPY OF AN ARRAY
console.log(arr.slice()); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); // [ 'a', 'b', 'c', 'd', 'e' ]

// ---SPLICE DOES CHANGE THE ORIGINAL ARRAY
console.log(arr.splice(2)); // [ 'c', 'd', 'e' ]
arr.splice(-1); // PRETTY COMMON USE CASE IS TO SIMPLY REMOVE THE LAST ELEMENT OF AN ARRAY
console.log(arr); // [ 'a']

arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]
arr.splice(1, 2);
console.log(arr); // [ 'a', 'd', 'e' ]
arr.splice(0, 1, 'f');
console.log(arr); // [ 'f', 'd', 'e' ]

// ---REVERSE DOES CHANGE THE ORIGINAL ARRAY
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // [ 'f', 'g', 'h', 'i', 'j' ]
console.log(arr2); // [ 'f', 'g', 'h', 'i', 'j' ]

// ---CONCAT DOES NOT CHANGE THE ORIGINAL ARRAY
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// ---JOIN RETURNS A STRING WITH SPECIFIED SEPARATOR
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
 */
// CHAPTER: LOOPING ARRAYS: FOREACH
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
  }
}

// ---FOREACH THE CONTINUE AND BREAK STATEMENTS DO NOT WORK
// movements.forEach(movement => console.log(movement));
console.log('-- FOREACH --');
// movements.forEach(function (movement) {
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i}: You withdrew ${Math.abs(mov)}`);
  }
});
// BEHIND THE SCENES
// 0: function(200)
// 1: function(450)
// 2: function(-400)
 */
// CHAPTER: FOREACH WITH MAPS AND SETS
/* 
// ---MAP DOES NOT HAVE INDEXES
console.log('-- MAP --');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// ---SET DOES NOT HAVE INDEXES AND KEYS
console.log('-- SET --');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) { 'USD', 'GBP', 'EUR' }

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
 */
// CHAPTER: PROJECT "BANKIST" APP

// CHAPTER: CODING CHALLENGE #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
   So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/* 
const checkDogs = function (dogsJulia, dogsKate) {
  // const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  // const dogsJuliaCorrected = dogsJulia.slice(1, 3);
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach(function (dog, i) {
    const message =
      dog >= 3 ? `an adult, and is ${dog} years old` : 'still a puppy 🐶';
    console.log(`Dog number ${i + 1} is ${message}`);
  });
};

console.log('-- TEST 1 --');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('-- TEST 2 --');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
 */
// CHAPTER: DATA TRANSFORMATIONS: MAP, FILTER, REDUCE

// ---MAP
// RETURNS A NEW ARRAY CONTAINING THE RESULTS OF APPLYING AN OPERATION ON ALL ORIGINAL ARRAY ELEMENTS

// ---FILTER
// RETURNS A NEW ARRAY CONTAINING THE ARRAY ELEMENTS THAT PASSED A SPECIFIED TEST CONDITION

// ---REDUCE
// BOILS ("REDUCES") ALL ARRAY ELEMENTS DOWN TO ONE SINGLE VALUE (E.G. ADDING ALL ELEMENTS TOGETHER)

// CHAPTER: THE MAP METHOD
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// FUNCTIONAL PROGRAMMING PARADIGM
const movementsUsd = movements.map(function (mov) {
  return Math.trunc(mov * eurToUsd); // [220, 495, -440, 3300, -715, -143, 77, 1430];
  // return 23; // [23, 23, 23, 23, 23, 23, 23, 23];
});
console.log(movementsUsd);

// THE SAME EXAMPLE WITH THE FOR OF LOOP
const movementsUsdForOf = [];
for (const mov of movements) movementsUsdForOf.push(Math.trunc(mov * eurToUsd));
console.log(movementsUsdForOf); // [220, 495, -440, 3300, -715, -143, 77, 1430];

// USING ARROW FUNCTION
const movementsUsdArrow = movements.map(mov => Math.trunc(mov * eurToUsd));
console.log(movementsUsdArrow); // [220, 495, -440, 3300, -715, -143, 77, 1430];

// EXAMPLE
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
 */
// CHAPTER: THE FILTER METHOD
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => mov > 0);
console.log(deposits); // [ 200, 450, 3000, 70, 1300 ]

const depositsForOf = [];
for (const mov of movements) if (mov > 0) depositsForOf.push(mov);
console.log(depositsForOf); // [ 200, 450, 3000, 70, 1300 ]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); // [ -400, -650, -130 ]
 */
// CHAPTER: THE REDUCE METHOD
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ACCUMULATOR -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);
// Iteration 0: 0
// Iteration 1: 200
// Iteration 2: 650
// Iteration 3: 250
// Iteration 4: 3250
// Iteration 5: 2600
// Iteration 6: 2470
// Iteration 7: 2540
// 3840

// const balance = movements.reduce((acc, cur) => acc + cur); // 3840
const balance = movements.reduce((acc, cur) => acc + cur, 100); // 3940

let balanceForOf = 0;
for (const mov of movements) balanceForOf += mov;
console.log(balanceForOf); // 3840

// GET THE MAXIMUM VALUE
const maxValue = movements.reduce((acc, cur) => (acc > cur ? acc : cur));
console.log(maxValue); // 3000
 */
// CHAPTER: CODING CHALLENGE #2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/* 
const calcAverageHumanAge = function (dogAges) {
  const AverageHumanAge = dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(dogAges => dogAges >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  console.log(Math.trunc(AverageHumanAge));
};

console.log('-- TEST 1 --');
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log('-- TEST 2 --');
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
 */

// CHAPTER: THE MAGIC OF CHAINING METHODS
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0) // RETURNS A NEW ARRAY
  .map(mov => mov * eurToUsd) // RETURNS A NEW ARRAY
  .reduce((acc, mov) => acc + mov, 0); // RETURNS A VALUE

console.log(totalDepositsUSD);
 */

// CHAPTER: CODING CHALLENGE #3
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/* 
const calcAverageHumanAge = dogAges =>
  dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(dogAges => dogAges >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

console.log('-- TEST 1 --');
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

console.log('-- TEST 2 --');
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg2);
 */

// CHAPTER: THE FIND METHOD
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0); // RETURNS A VALUE
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(firstWithdrawal); // -400

// EXAMPLE
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const account = accounts.find(acc => (acc.owner = 'Steven Thomas Williams'));
console.log(account);

// THE SAME AS ABOVE JUST USING FOR OF LOOP
let accountForOf;
for (const acc of accounts)
  acc.owner === 'Steven Thomas Williams' && (accountForOf = acc);
console.log(accountForOf);
 */

// CHAPTER: SOME AND EVERY
/* 
// ---SOME METHOD
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]

// EQUALITY
console.log(movements.includes(-130)); // true
// THE SAME AS ABOVE
console.log(movements.some(mov => mov === -130)); // true

// ONE OF ELEMEMENTS CONDITION
console.log(movements.some(mov => mov > 0)); // true
console.log(movements.some(mov => mov > 5000)); // false
console.log(movements.some(mov => mov > 1500)); // true

// ---EVERY METHOD
// EVERY ELEMENT CONDITION
console.log(movements.every(mov => mov > 0)); // false

console.log(account4.movements); // [430, 1000, 700, 50, 90]
console.log(account4.movements.every(mov => mov > 0)); // true

// ---SEPARATE CALLBACK
console.log('-- SEPARATE CALLBACK --');
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // [200, 450, 3000, 70, 1300]
 */
// CHAPTER: FLAT AND FLATMAP
/* 
// ---FLAT: REMOVES ALL NESTED ARRAYS AND FLATTENS THE ARRAY
const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrDeep = [[1, [2, 3]], [[4, 5], 6], 7, 8, 9];
console.log(arrDeep.flat()); // [ 1, [ 2, 3 ], [ 4, 5 ], 6, 7, 8, 9 ]

console.log(arrDeep.flat().flat()); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arrDeep.flat(2)); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ---EXAMPLE
const accountMovements = accounts.map(acc => acc.movements);
console.table(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements); // [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840

// ---WE CAN JUST CHAIN IT
const overallBalanceChained = accounts
  .map(account => account.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
console.log(overallBalanceChained); // 17840

// ---FLATMAP: COMBINES BOTH FLAT AND MAP METHODS WITH BETTER PERFORMANCE BUT GOES ONLY ONE LEVEL DEEP
const overallBalanceFlatMap = accounts
  .flatMap(account => account.movements)
  .reduce((acc, mov) => acc + mov);
console.log(overallBalanceFlatMap); // 17840
 */

// CHAPTER: SORTING ARRAYS
/* 
// ---SORT: STRINGS
const owners = accounts.map(account => account.owner.split(' ')[0]);
console.log(owners); // ["Jonas", "Jessica", "Steven", "Sarah"]
console.log(owners.sort()); // ["Jessica", "Jonas", "Sarah", "Steven"]

// ---SORT: NUMBERS
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
// RETURN < 0, A, B (KEEP ORDER)
// RETURN > 0, B, A (SWITCH ORDER)
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
}); // ASCENDING
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
}); // DESCENDING
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

// OR YOU CAN WRITE LIKE THIS
movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]
 */
