'use strict'

// EXECUTION CONTEXT AND SOME MORE
/* 
function func(a, b, c) {
  console.log(arguments[0])
  console.log(arguments[1])
  console.log(arguments[2])
}

func(1, 2, 3)

const foo = function (a, b, c) {
  console.log(arguments[0])
  console.log(arguments[1])
  console.log(arguments[2])
}
foo(1, 2, 3)

// EXECUTION CONTEXTS BELONGING TO ARROW FUNCTIONS
// DO NOT GET THEIR OWN 'ARGUMENTS' KEYWORD
// NOR DO THEY GET THE 'THIS' KEYWORD
// const bar = (a, b, c) => {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
// };

// bar(1, 2, 3);

// METASYNTACTIC VARIABLES
// foo = 'fooValue',
// bar = 'barValue',
// qux = 'quuxValue',
// ose = 'oseValue',
// rol = 'rolValue',
// zed = 'zedValue';

const qux = function (a, b, c) {
  // INSTEAD THEY CAN USE THE ARGUMENTS OBJECT
  // AND 'THIS' KEYWORD FROM THEIR CLOSEST REGULAR FUNCTION PARENT
  const ose = () => {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    return a + b + c
  }
  return ose()
}

const a = qux(1, 2, 3)
console.log(a)

// AN EXAMPLE
const name = 'Jonas'

const first = () => {
  let a = 1
  const b = second(7, 9)
  a = a + b
  return a
}

function second(x, y) {
  const c = 2
  return c
}

const x = first()
console.log(x) // 3

 */

/* 

// THE SCOPE CHAIN
const myName = 'Jonas'

function first() {
  const age = 30
  // const myName = 'Julia'
  // console.log(job) // we can't access this variable from child scope

  if (age >= 30) {
    const decade = 3
    var millenial = true
    // console.log(job) // we can't access this variable from sibling scope
  }

  function second() {
    const job = 'teacher'
    // const myName = 'Robert'
    console.log(`${myName} is a ${age}-old ${job}`) // but we can access all parent variables except block scope variables
    console.log(millenial) // we can access this variable as a part of a function scope
    // console.log(decade) // it's in another block scope and it's not defined here! we can't access it
  }

  second()
}

first()

 */

/* 
// PRACTICE

function calcAge(birthYear) {
  const age = 2021 - birthYear
  // console.log(firstName)
  // console.log(arguments)

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`
    console.log(output)

    if (birthYear >= 1981 && birthYear <= 1996) {
      // CREATING NEW VARIABLE WITH THE SAME NAME AS OUTER SCOPE'S VARIABLE
      const firstName = 'Steven'

      const millenial = `Oh, and you're a millenial, ${firstName}`
      var nonBlockMillenial = true
      console.log(millenial)
      function add(a, b) {
        return a + b
      }

      // REASSIGNING OUTER SCOPE'S VARIABLE
      output = 'NEW OUTPUT!' // NEW OUTPUT!

      // let output = 'NEW OUTPUT!' // Jonas, you are 36, born in 1985.
    }

    // console.log(millenial) // WE CAN'T ACCESS THIS BLOCK SCOPED VARIABLE (LET CONST)
    console.log(nonBlockMillenial) // BUT WE CAN ACCESS THIS VARIABLE BECAUSE IT'S FUNCTION SCOPED (VAR)
    // add(2, 3) // WE CAN'T ALSO ACCESS THIS FUNCTION BECAUSE FUNCTIONS ARE BLOCK SCOPED TOO (ES6 IN STRICT MODE)
    console.log(output)
  }

  printAge()
  return age
}

const firstName = 'Jonas'
calcAge(1985)

// WE CAN'T ACCESS THE CHILD SCOPE
// console.log(age)
// printAge()

 */

//  HOISTING PRACTICE

/* 
// VARIABLES
console.log(me) // undefined
// console.log(job) // ReferenceError: Cannot access 'job' before initialization
// console.log(year) // ReferenceError: Cannot access 'job' before initialization

var me = 'Jonas'
let job = 'teacher'
const year = '1991'

// FUNCTIONS
console.log(addDecl(2, 3)) // 5
// console.log(addExpr(2, 3)) // ReferenceError: Cannot access 'job' before initialization
// console.log(addArrow(2, 3)) // ReferenceError: Cannot access 'job' before initialization

function addDecl(a, b) {
  return a + b
}

const addExpr = function (a, b) {
  return a + b
}

const addArrow = (a, b) => a + b

 */

// EXAMPLE WHY YOU SHOULDN'T USE VAR DECLARATIONS
/* 
console.log(numProducts)
if (!numProducts) deleteShoppingCart()

var numProducts = 10

function deleteShoppingCart() {
  console.log('All products deleted!')
}
 */

//  this KEYWORD
console.log(this)

const calcAge = function (birthYear) {
  console.log(2021 - birthYear)
  console.log(this)
}

calcAge(1977)

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear)
  console.log(this)
}

calcAgeArrow(1985)

const jonas = {
  birthYear: 1977,
  calcAge: function () {
    console.log(this)
    console.log(2021 - this.birthYear)
  },
}

jonas.calcAge()

const mark = {
  birthYear: 1985,
}

// METHOD BORROWING
mark.calcAge = jonas.calcAge
mark.calcAge()
console.log(mark)
