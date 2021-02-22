/*

// LECTURE: Values and Variables 

// NAMING CONVENTION
let $meBe = true
console.log($meBe)

let _meBe = false
console.log(_meBe)

// DON NOT USE THIS VARIABLE NAMES
let name = 'Samuel Jackson'
console.log(name)

let Person = 'Michael Jordan'
console.log(Person)

// CONSTANTS NAMING CONVENTION
let PI = 3.1415
console.log(PI)

// USE DISCRIPTIVE VARIABLE NAMES
let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher'

let job1 = 'programmer'
let job2 = 'teacher'

*/

/* 

// ASSIGNMENT
let country = 'Russian Federation'
let continent = 'Eastern Europe and Northern Asia'
let population = 146

console.log(
  `The ${country} is a transcontinential country spanning ${continent} and its population is over ${population} million`
)

*/

/*

// DATA TYPES

// OBJECTS AND PRIMITIVES
let me = { name: 'Jonas' }

let firstName = 'Jonas'
let salary = 350

// THE 7 PRIMITIVE DATA TYPES: NUMBER, STRING, BOOLEAN, UNDEFINED, NULL, SYMBOL, BIG INT

// 1. Numbers: Floating point numbers. Used for decimals and integers
let age = 23

// 2. Strings: Sequence of characters. Used for text
let lastName = 'Schmedtmann'

// 3. Boolean: Logical type that can only be true or false. Used for taking decisions
let fullAge = true
console.log(fullAge)

// 4. Undefined: Value taken by a variable that is now yet defined ('empty value')
let children
console.log(children)

// 5. Null: Also means 'empy value'

// 6. Symbol (ES2015): Value that is unique and cannot be changed [Not usefull for now]

// 7. BigInt (ES2020): Larger integers that the Number type can hold

// JavaScript has dynamic typing: We do not have to manually define the data type of
// the value stored in a variable. Instead, data types are determined automatically

// In JavaScript it's the value that has a type, NOT the variable

// The typeof operator returns a string indicating the type of the unevaluated operand
console.log(typeof true)
console.log(typeof 23)
console.log(typeof 'Jonas')

// Dynamic Typing simply means that we can easily change the type of a value that is hold by a variable
let javascriptIsFun = true
console.log(javascriptIsFun)

javascriptIsFun = 'YES!'
console.log(javascriptIsFun)

let year
console.log(year)
console.log(typeof year)

year = 1991
console.log(typeof year)

console.log(typeof null) // it returns 'object' but it's NOT an object. That's a BUG!

*/

/* 

// ASSIGNMENT
let isIsland = false
let language
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

*/

/*

// LET, CONST AND VAR

// We use the let keyword to declare variables that can change later
let age = 30
age = 31

// We use the const keyword to declare variables that are not suppose to change at any point in the future
// We cannot declare empty const variables
// const birthYear // Uncaught SyntaxError: Missing initializer in const declaration
const birthYear = 1991
// birthYear = 1992 // Uncaught TypeError: Assignment to constant variable.

// USE CONST OR LET
// Use 'const' by default and 'let' only when you are really sure that the variable needs to change at some point in the future
// It's a good practice to have as little variable mutations or variable changes as possible
// because changing variables introduces a potential to create bugs

// let is block-scoped
// var is function-scoped

*/

/* 

// ASSIGNMENT
language = 'Russian'
const DOB = '26 of January 1977'
console.log(DOB)

*/

/*

// BASIC OPERATORS

// Math operators
const now = 2021
const myYearOfBirth = 1977
const myAge = now - myYearOfBirth
console.log(myAge)

console.log(2 * 2, 9 / 3, 2 ** 3) // 4, 3, 8
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName + lastName)
console.log(firstName + ' ' + lastName)

// Assignment operators
let x = 5 + 10
x += 10 // x = x + 10
x *= 4 // x = x * 4
x /= 2 // x = x / 2
x++ // x = x + 1
x-- // x = x - 1
console.log(x)

// Comparison operators >, <, >=, <=
// Basically, we use comparison operators to produce 'boolean' values
console.log(4 > 3) // true
console.log(myAge >= 18) // true

const isFullAge = myAge >= 18
console.log(isFullAge) // true

console.log(10 + 2 > 20 - 10) // true

*/

/* 

// ASSIGNMENT
console.log(population / 2)
population++
console.log(population)
const populationOfFinland = 6
console.log(population > populationOfFinland) // true
console.log(population < 33)
const description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language
console.log(description)

*/

/*  

// OPERATOR PRECEDENCE
let x, y
x = y = 25 - 10 - 5 // x = y = 10, x = 10
console.log(x, y) // 10, 10

const now = 2021
const ageJonas = now - 1991
const ageSarah = now - 2018
const averageAge = (ageJonas + ageJonas) / 2
console.log(averageAge)

*/

/* 

// CODING CHALLENGE #1
const markWeight = 78
const markHeight = 1.69

const johnWeight = 92
const johnHeight = 1.95

const markBMI = (markWeight / markHeight ** 2).toFixed(2)
const johnBMI = (johnWeight / johnHeight ** 2).toFixed(2)
const markHigherBMI = markBMI > johnBMI
console.log(markBMI, johnBMI, markHigherBMI)

 */

/* 

// Strings and Template Literals
const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const currentYear = 2021
const jonas =
  "I'm " +
  firstName +
  ', a ' +
  (currentYear - birthYear) +
  ' years old ' +
  job +
  '!'
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`
console.log(jonasNew)

console.log(`Just a regular string...`)

console.log('String with \n\
multiple\n\
lines')

console.log(`String with
multiple
lines`)

 */

/* 

// ASSIGNMENT
const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(newDescription)

 */

/*

//  Taking Decisions: if / else Statements
const age = 15
const isOldEnough = age >= 18

if (isOldEnough) console.log('Sarah can start driving license')
else console.log(`No she can't and has to wait for ${18 - age} year(s)`)
// if else control structure
// if (condition) {

// } else {

// }
const birthYear = 1991

// if (birthYear <= 2000) {
//   let century = 20
//   console.log(century)
// } else {
//   let century = 21
//   console.log(century)
// }

let century
if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}
console.log(century)

*/

/* 

// ASSIGNMENT
let newPopulation = 13
if (newPopulation > 33)
  console.log(`The ${country}'s population is above average`)
else
  console.log(
    `The ${country}'s pupulation is ${33 - newPopulation} million below average`
  )

// CODING CHALLENGE #2
if (markBMI > johnBMI)
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
else console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)

// TYPE CONVERSION AND COERCION
const inputYear = '1991'
console.log(inputYear + 18) // 199118 CONCATINATION
const inputYearNext = '1991'
console.log(Number(inputYear) + 18) // 2009

// TYPE CONVERSION
console.log(Number('Jonas')) // NaN - we get it whenever an operation involving numbers, fails to give us a new number
console.log(typeof NaN) // number (invalid number)
console.log(String(23)) // number to string

// TYPE COERCION
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3) // 10
console.log('23' + '10' + 3) // '23103'
console.log('23' * '2') // 46
console.log('23' / '2') // 11.5
console.log('23' > '2') // true

let n = '1' + 1
n = n - 1
console.log(n) // 10

console.log(2 + 3 + 4 + '5') // '95'
console.log('10' - '4' - '3' - 2 + '5') // '15'

// ASSIGNMENT
console.log('9' - '5') // 4
console.log('19' - '13' + '17') // '617'
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143
console.log(11 + '4' + 3) // '1143'
console.log(11 + '4' + 4 - 1) // 1143

*/

/*  

// TRUTHY AND FALSY VALUES
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean('Jonas')) // true
console.log(Boolean({})) // true
console.log(Boolean(' ')) // true
console.log(Boolean('')) // false

const money = 100
if (money) console.log(`Don't spend it all`)
else console.log(`You should get a job!`)

let height = 0
if (height) console.log(`Yay! Height is defined`)
else console.log(`Height is UNDEFINED`)

*/

/* 

// EQUALITY OPERATORS: == VS ===
const age = 18
if (age === 18) console.log(`You just became an adult`)

console.log(18 === 18) // true... strict equality operator and it does not perform type coercion
console.log('18' == 18) // true... loose equality operator and it does perform type coercion
console.log('18' === 18) // false

const favoriteNumber = Number(prompt(`What's your favorite number?: `))
console.log(favoriteNumber)
console.log(typeof favoriteNumber)

if (favoriteNumber === 23) console.log(`Cool! 23 is an amazing number!`)
else if (favoriteNumber === 7) console.log(`7 is also a cool number`)
else if (favoriteNumber === 9) console.log(`9 is also a cool number`)
else console.log(`Number ${favoriteNumber} is not 7, 9 or 23`)

// DIFFERENT OPERATOR: != VS !==
if (favoriteNumber !== 23) console.log(`Why not 23?`)

 */

// ASSIGNMENT
/* const numNeighbours = Number(
  prompt(`How many neighbour countries does your country have?`)
)
if (numNeighbours === 1) console.log(`Only 1 border!`)
else if (numNeighbours > 1) console.log(`More than 1 border`)
else console.log(`No borders`) */

//  BOOLEAN LOGIC: AND OR NOT

/* 

// LOGICAL OPERATORS
const hasDriversLicense = true // A
const hasGoodVision = true // B
const isTired = false // C

if (hasDriversLicense && hasGoodVision && !isTired)
  console.log(`Sarah is able to drive`)
else console.log('Someone else should drive...')

*/

/* 

// ASSIGNMENT
if (language === 'English' && population < 50 && !isIsland) {
  console.log(`You shouldn't live in The ${country}`)
} else {
  console.log(`The ${country} does not meet your criteria`)
}

// CODING CHALLENGE #3
let averageDolphins = +((96 + 108 + 89) / 3).toFixed() // 98
let averageKoalas = +((88 + 91 + 110) / 3).toFixed() // 96
if (averageDolphins > averageKoalas) {
  console.log(
    `Dolphins win with the score: ${averageDolphins}:${averageKoalas}`
  )
} else if (averageDolphins < averageKoalas) {
  console.log(`Koalas win with the score: ${averageKoalas}:${averageDolphins}`)
} else {
  console.log(
    `Both wins the trophy. The score is:${averageKoalas}:${averageDolphins} It's a draw!`
  )
}
// BONUS 1:
averageDolphins = +((97 + 112 + 80) / 3).toFixed() // 96
averageKoalas = +((109 + 95 + 12) / 3).toFixed() // 72
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(
    `Dolphins win with the score: ${averageDolphins}:${averageKoalas}`
  )
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
  console.log(`Koalas win with the score: ${averageKoalas}:${averageDolphins}`)
} else {
  console.log(
    `Nobody wins! The score is: ${averageKoalas}:${averageDolphins}. Minimum score is 100 points`
  )
}

// BONUS 2:
averageDolphins = +((97 + 112 + 101) / 3).toFixed() // 103
averageKoalas = +((109 + 95 + 106) / 3).toFixed() // 103
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(
    `Dolphins win with the score: ${averageDolphins}:${averageKoalas}`
  )
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
  console.log(`Koalas win with the score: ${averageKoalas}:${averageDolphins}`)
} else if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
) {
  console.log(
    `Both wins the trophy. The score is:${averageKoalas}:${averageDolphins} It's a draw!`
  )
} else {
  console.log(
    `Nobody wins! The score is: ${averageKoalas}:${averageDolphins}. Minimum score is 100 points`
  )
}

*/

/* 

// THE SWITCH STATEMENT
// const day = 'Monday'
// const day = 'Tuesday'
// const day = 'Wednesday'
// const day = 'Thursday'
// const day = 'Friday'
const day = 'Saturday'
// const day = 'Sunday'
// const day = 'Ponedelnik'

switch (day) {
  case 'Monday': // day === 'Monday'
    console.log('Plan course structure')
    console.log('Go to coding meetup')
    break
  case 'Tuesday':
    console.log('Prepare theory videos')
    break
  case 'Wednesday':
  case 'Thursday':
    console.log('Write code examples')
    break
  case 'Friday':
    console.log('Record videos')
    break
  case 'Saturday':
  case 'Sunday':
    console.log('Enjoy the Weekend 😀')
    break
  default:
    console.log('Not a valid day')
}

if (day === 'Monday') {
  console.log('Plan course structure')
  console.log('Go to coding meetup')
} else if (day === 'Tuesday') {
  console.log('Prepare theory videos')
} else if (day === 'Wednesday' || day === 'Thursday') {
  console.log('Write code examples')
} else if (day === 'Friday') {
  console.log('Record videos')
} else if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the Weekend 😀')
} else {
  console.log('Not a valid day')
}

*/

/*  

// ASSIGNMENT
const language = 'chinese'
// const language = 'mandarin'
// const language = 'spanish'
// const language = 'english'
// const language = 'hindi'
// const language = 'arabic'
// const language = 'Russian'

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!')
    break
  case 'spanish':
    console.log('2nd place in number of native speakers')
    break
  case 'english':
    console.log('3d place')
    break
  case 'hindi':
    console.log('Number 4')
    break
  case 'arabic':
    console.log('5th most spoken language')
    break
  default:
    console.log('Great language too 😀')
}

*/

// STATEMENTS AND EXPRESSIONS

// Expression is a piece of code that produces a value: 3 + 4, 1991, true && true
// const x = 5
// const y = getAnswer()

// Statement is an instruction, an action; it's just performs or controls actions, but doesn't become value
// let num = 2
// const f = (num) => {
//   if (num > 0) {
//     return num
//   } else {
//     return 0
//   }
// }
// result = f(num)

// for (let counter = 1; counter <= num; counter++) {
//   result *= counter
//   console.log(result)
// }

// You can't put statements where expressions are expected!

// For example, passing a 'const' statement as a function argument will produce an error:
// console.log(cost x)
// Or trying to assign 'if' statement to a variable:
// let b = if (x>10) {return 100}
// Or you can't use ++ increment operator as an expression to assign to a variable, it just won't work proper way
// let z = result++ // it increments result by 1 (from 4 to 5) but assigns 4 to z
// console.log(z) // 4
// let y = result++ // it also increments result by 1 (now from 5 to 6) but now assigns 5 to y
// console.log(y) // 5
// result++ // now it increments result again by 1 (from 6 to 7)
// z = result // now it assigns 7 to z
// console.log(z) // 7

// This difference between expressions and statements is important to know
// because JavaScript expects statements and expressions in different places
// Statements don't make sense where JS expects an expression

// For example, in a template literal, we can only insert expressions, but not statements
// console.log(`I'm ${2021 - 1997} years old.`) // we insert expression
// console.log(`${const age=2021-1997} I'm ${age} years old. `) // we are trying to insert statement; this won't work

/* 

// THE CONDITIONAL (TERNARY) OPERATOR
let age = 23
age >= 18
  ? console.log('I like to drink wine 🍷')
  : console.log('I like to eat pineapples 🍍')

age >= 18 && console.log('Take this bottle 🍼 🤣🤣🤣')
age = 15
// We can't use if/else statement or any other statements in template literals, but now we can use this conditional operator
console.log(`Drink some ${age >= 18 ? 'vodka' : 'cola'}`)
// The conditional operator is in fact an operator and an operator always produces a value
// In other words an operator is an expression
// With ternary operators we can conditionally declare variables
const drink = age >= 18 ? 'wine' : 'water'
console.log(`I'd like to drink some ${drink}`)

*/
/*

// ASSIGNMENT
const country = 'Russian Federation'
const population = 146
console.log(
  `The ${country}'s population is ${
    population > 30 ? 'above' : 'below'
  } average`
)

*/

/*

// CODING CHALLENGE #4
let bill = 275
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(bill, tip)
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
)
bill = 40
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(bill, tip)
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
)
bill = 430
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(bill, tip)
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
)

*/

// JavaSctipt Releases: ES5, ES6+ and ESNext
