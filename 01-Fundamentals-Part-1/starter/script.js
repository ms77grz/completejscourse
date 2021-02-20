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

// ASSIGNMENT
let country = 'Russian Federation'
let continent = 'Eastern Europe and Northern Asia'
let population = 146

console.log(
  `The ${country} is a transcontinential country spanning ${continent} and its population is over ${population} million`
)

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

// ASSIGNMENT
let isIsland = false
let language
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

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

// ASSIGNMENT
language = 'Russian'
const DOB = '26 of January 1977'
console.log(DOB)

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

// CODING CHALLENGE
const markWeight = 78
const markHeight = 1.69

const johnWeight = 92
const johnHeight = 1.95

const markBMI = markWeight / markHeight ** 2
const johnBMI = johnWeight / johnHeight ** 2
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

// ASSIGNMENT
const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(newDescription)

/*  */

//  Taking Decisions: if / else Statements
const age = 15
const isOldEnough = age >= 18

if (isOldEnough) console.log('Sarah can start driving license')
else console.log("no she can't")
