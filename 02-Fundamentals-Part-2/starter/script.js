'use strict'

/*
// ACTIVATING STRICT MODE
// 'use strict' mode helps to detect and find possible errors or bugs in code

let hasDriversLicense = false
const passTest = true
if (passTest) hasDriverLicense = true
if (hasDriversLicense) console.log('Now I can drive') // ReferenceError: hasDriverLicense is not defined

// STRICT MODE ALSO SHOWS SHORT LIST OF VARIABLE NAMES THAT ARE RESERVED FOR FEATURES THAT MIGHT BE ADDED TO THE LANGUAGE LATER
const interface = 'Audio' // SyntaxError: Unexpected strict mode reserved word
const private = 543 // SyntaxError: Unexpected strict mode reserved word

*/

/*

// FUNCTIONS
function logger() {
  console.log('My name is Jonas')
}

// Calling / running / invoking function
logger()
logger()
logger()

// Parameters represent the input data of a function
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges)
  const juice = `Juice with ${apples} and ${oranges} oranges.`
  return juice
}

// Now we call our function with two arguments - 5, 0 and capture the output value into the variable
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

// We can also call a funcion without capturing the output value into any variable and simply log the result of running a function
console.log(fruitProcessor(5, 0))

// We can reuse a function with different arguments
const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

// Function that we used to convert a string to a number
const num = Number('23')
console.log(num)

*/

/*
// ASSIGNMENT
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const russia = describeCountry('Russia', 146, 'Moscow')
const germany = describeCountry('Germany', 83, 'Berlin')
const england = describeCountry('England', 56, 'London')
console.log(russia)
console.log(germany)
console.log(england)

*/

/*

// FUNCTION DECLARATIONS VS FUNCTION EXPRESSIONS

// FUNCTION DECLARATION
const ageOne = calcAgeOne(1977) // You can call a function declaration before you define it if NECESSARY even though that might not be such a good idea in many cases

function calcAgeOne(birthYear) {
  return 2021 - birthYear
}
console.log(ageOne)

// FUNCTION EXPRESSION also called ANONYMOUS FUNCTION
const calcAgeTwo = function (birthYear) {
  return 2021 - birthYear
}
const ageTwo = calcAgeTwo(2009)
console.log(ageTwo)

// WHICH OF THE TWO TYPES OF FUNCTIONS SHOULD I USE?
// It's really just a matter of personal preference, different developers prefer different formats
// I prefer to use FUNCTION EXPRESSIONS because this then focuses me into a nice structure
// where I have to define all the functions first at the top of the code and only then I can call them
// This makes the code a little bit nicer and more structured and I also like to have everything stored in variables

*/

/*

// ASSIGNMENT
function percentageOfWorld(population) {
  return `${((population / 7900) * 100).toFixed(1)}%`
}

const china = percentageOfWorld(1441)
const russia = percentageOfWorld(146)
const germany = percentageOfWorld(83)
console.log(china)
console.log(russia)
console.log(germany)

const percentageOW = function (population) {
  return `${((population / 7900) * 100).toFixed(1)}%`
}
const chinaPOW = percentageOW(1441)
const russiaPOW = percentageOW(146)
const germanyPOW = percentageOW(83)
console.log(chinaPOW)
console.log(russiaPOW)
console.log(germanyPOW)

*/

/*

// ARROW FUNCTIONS

// ARROW FUNCTIONS HAVE MORE CONCISE SYNTAX FOR WRITING FUNCTION EXPRESSIONS
// let add = (x,y) => {return x + y}
// let add = (x,y) => x + y // WE CAN WRITE ALSO LIKE THIS IF ONLY ONE EXPRESSON PRESENT

// IF THERE'S ONLY ONE ARGUMENT
// let squareNum = x => x * x

// AND IF THERE ARE NO ARGUMENTS
// let sayHi = _ => console.log('Hi');

// ONE PARAMETER AND ONE LINE OF CODE
const calcAge = (birthYear) => 2021 - birthYear
console.log(calcAge(1977))

// ONE PARAMETER AND MORE THAN ONE LINE OF CODE WE NEED THE RETURN STATEMENT
const yearsToRetire = (birthYear) => {
  const age = 2021 - birthYear
  const retire = 65 - age
  return retire
}
console.log(yearsToRetire(1977))

// OR MULTIPLY PARAMETERS
const calcAgeOfPerson = (firstName, birthYear) => {
  const age = 2021 - birthYear
  return `${firstName} is ${age} years old`
}
console.log(calcAgeOfPerson('Magax', 1977))
console.log(calcAgeOfPerson('Bakar', 2009))

// WHAT TYPE OF FUNCTIONS SHOULD I USE?

// Arrow functions do not have an arguments binding
// Unlike regular functions, arrow functions do not have their own this
// Can never be used as constructor functions
// Arrow functions can never have duplicate named parameters, whether in strict or non-strict mode

// FOR NOW WILL KEEP USING FTHE UNCTION EXPRESSIONS THE MOST

*/

/*

// ASSIGNMENT
const populationPercentage = (population) => (population / 7900) * 100
console.log(populationPercentage(1441))
console.log(populationPercentage(146))
console.log(populationPercentage(83))

*/

/*

// FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
  return juice
}

console.log(fruitProcessor(2, 3))

*/

/*

// ASSIGNMENT
function percentageOfWorld(population) {
  return (population / 7900) * 100
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld(population).toFixed(1)
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

console.log(describePopulation('China', 1441))
console.log(describePopulation('Russia', 146))
console.log(describePopulation('Germany', 83))

*/

/*

// REVIEWING FUNCTIONS

const calcAge = function (birthYear) {
  const year = new Date().getFullYear()
  return year - birthYear
}

// const yearsToRetire = function (birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age
//   return retirement < 0
//     ? `${firstName} has already retirementd for ${Math.abs(retirement)} year(s)`
//     : `${firstName} retirements in ${retirement} year(s)`
// }

// const yearsToRetire = function (birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} year(s)`)
//     return retirement
//   } else {
//     console.log(
//       `${firstName} has already retired for ${Math.abs(retirement)} year(s)`
//     )
//     return -1
//   }
// }

const yearsToRetire = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} year(s)`)
    return retirement
  } else if (retirement < 0) {
    console.log(
      `${firstName} has already retired for ${Math.abs(retirement)} year(s)`
    )
    return -1
  } else {
    console.log(`${firstName} retires this year!`)
    return 0
  }
}

console.log(yearsToRetire(1977, 'Magax'))
console.log(yearsToRetire(1938, 'Mariam'))
console.log(yearsToRetire(1956, 'Alex'))

// THREE TYPE OF FUNCTIONS

// FUNCTION DECLARATION: FUNCTION THAT CAN BE USED BEFORE IT'S DECLARED
// function calcAge(birthYear) {
//   return 2021 - birthYear
// }

// FUNCTION EXPRESSION: ESSENTIALY A FUNCTION VALUE STORED IN A VARIABLE
// const calcAge = function (birthYear) {
//   return 2021 - birthYear
// }

// ARROW FUNCTION: GREAT FOR A QUICK ONE-LINE FUNCTIONS. HAS NO THIS KEYWORD (MORE LATER...)
// const calcAge = birthYear => 2021 - birthYear

// THREE DIFFERENT WAYS OF WRITING FUNCTIONS, BUT THEY ALL WORK IN A SIMILAR WAY:
// RECEIVE INPUT DATA, TRANSFORM DATA, OUTPUT DATA

*/

/*

// CODING CHALLENGE #1

const calcAverage = (a, b, c) => (a + b + c) / 3

let dolphinsScore = calcAverage(44, 23, 71)
let koalasScore = calcAverage(65, 54, 49)

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2)
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
  else if (avgKoalas >= avgDolphins * 2)
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
  else console.log('No team wins')
}

checkWinner(dolphinsScore, koalasScore)

dolphinsScore = calcAverage(85, 54, 41)
koalasScore = calcAverage(23, 34, 27)

checkWinner(dolphinsScore, koalasScore)

*/

/*

// INTRODUCTION TO ARRAYS
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020)
console.log(years)

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

// ONLY PRIMITIVE VALUES ARE IMMUTABLE
// AN ARRAY IS NOT A PRIMITIVE VALUE, SO WE CAN MUTATE IT
// BUT WE CANNOT REPLACE THE ENTIRE ARRAY:
// friends = ['Bob', 'Alice'] // TypeError: Assignment to constant variable.

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2021 - 1991, 'teacher', friends]
console.log(jonas)
console.log(jonas.length)

// Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear
}

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
]
console.log(ages)

*/

/*

// ASSIGNMENT
const china = 1441
const russia = 146
const germany = 83
const england = 56
const populations = [china, russia, germany, england]
console.log(populations)
populations.length === 4 ? console.log(true) : console.log(false)

const percentageOfWorld = function (population) {
  return +((population / 7900) * 100).toFixed(1)
}
const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
]
console.log(percentages)

*/

/*

// BASIC ARRAY OPERATIONS (METHODS)

// ADD ELEMENTS

// PUSH' METHOD ADDS A NEW ELEMENT TO THE END OF THE ARRAY AND ALSO RETURNS A VALUE OF THE LENGTH OF THE NEW ARRAY
const friends = ['Michael', 'Steven', 'Peter']
let newLength = friends.push('Jay')
console.log(friends, newLength)

// 'UNSHIFT' METHOD ADDS A NEW ELEMENT TO THE BEGINNING OF THE ARRAY AND IT ALSO RETURNS A VALUE OF THE LENGTH OF THE NEW ARRAY
newLength = friends.unshift('John')
console.log(friends, newLength)

// REMOVE ELEMENTS

// 'POP' METHOD REMOVES THE LAST ELEMENT OF THE ARRAY AND RETURNS IT
let removedElement = friends.pop()
console.log(friends, removedElement)

// 'SHIFT' METHOD REMOVES THE FIRST ELEMENT OF THE ARRAY AND ALSO RETURNS IT
removedElement = friends.shift()
console.log(friends, removedElement)

// 'INDEX' METHOD RETURNS THE INDEX AT WHICH THE ELEMENT IS LOCATED OR IT RETURNS -1
console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

// 'INCLUDES' METHOD RETURNS TRUE OR FALSE IF THE ELEMENT IS LOCATED (ES6 METHOD) AND IT USES STRICT EQUALITY FOR THIS CHECK
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
friends.push(23)
console.log(friends.includes('23')) // false
console.log(friends.includes(23)) // true

friends.includes('Peter') && console.log('You have a friend called Peter')

*/

/*

// ASSIGNMENT
const neighbours = [
  'Azerbaijan',
  'Belarus',
  'China',
  'Estonia',
  'Finland',
  'Georgia',
  'Kazakhstan',
  'North Korea',
  'Latvia',
  'Lithuania',
  'Mongolia',
  'Norway',
  'Poland',
  'Ukraine',
]
console.log(neighbours.length)
neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop()
console.log(neighbours)
!neighbours.includes('Germany') &&
  console.log('Probably not a central European country 😁')
neighbours[neighbours.indexOf('Belarus')] = 'Republic of Belarus'
console.log(neighbours)

*/

/*

// CODING CHALLENGE #2

// USING FUNCTION EXPRESSIION
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  //   if (bill >= 50 && bill <= 300) {
  //     return bill * 0.15
  //   } else {
  //     return bill * 0.2
  //   }
}

// USING ARROW FUNCTION
// const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)

console.log(calcTip(100))
console.log(calcTip(10))

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total)

const sum = total.reduce((a, b) => a + b)
console.log(sum)

*/

/*

// INTRODUCTION TO OBJECTS

// OBJECT LITERAL SYNTAX

// THIS OBJECT HAS 5 PROPERTIES
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2021 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
}
console.log(jonas)

*/

/*

// ASSIGNMENT
const myCountry = {
  country: 'Russia',
  capital: 'Moscow',
  language: 'Russian',
  population: 146,
  neighbours: [
    'Azerbaijan',
    'Belarus',
    'China',
    'Estonia',
    'Finland',
    'Georgia',
    'Kazakhstan',
    'North Korea',
    'Latvia',
    'Lithuania',
    'Mongolia',
    'Norway',
    'Poland',
    'Ukraine',
  ],
}
console.log(myCountry)

*/

/*

// DOTS VS BRACKET NOTATION
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2021 - 1991,
  job: 'teacher',
  friends: ['Bakar', 'Michael', 'Peter', 'Steven'],
}

// ACCESS TO A PROPERTY VALUE VIA DOT OPERATOR
console.log(jonas.lastName)

// ACCESS TO A RROPERTY VALUE VIA BRACKETS SPECIFYING A STRING WITH THE PROPERTY NAME (WITH THE KEY)
console.log(jonas['lastName'])

// WE CAN PUT ANY EXPRESSION INTO THE BRACKETS TO RETRIEVE SOME DATA
const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

// WHEN WE NEED TO FIRST COMPUTE THE PROPERTY NAME WE USE THE BRACKET NOTATION
// IN ANY OTHER CASE WE USE THE DOT NOTATION BECAUSE IT LOOKS A LOT CLEANER AND EASIER TO USE

const interestedIn = prompt(
  `What do you want to know about Jonas? Choose between ${Object.keys(jonas)}`
)
console.log(
  jonas[interestedIn]
    ? jonas[interestedIn]
    : `Wrong request! Choose between ${Object.keys(jonas)}`
)

jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtmann'
console.log(jonas)

// CHALLENGE
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
)

*/

/*

// ASSIGNMENT
const myCountry = {
  country: 'Russia',
  capital: 'Moscow',
  language: 'Russian',
  population: 146,
  neighbours: [
    'Azerbaijan',
    'Belarus',
    'China',
    'Estonia',
    'Finland',
    'Georgia',
    'Kazakhstan',
    'North Korea',
    'Latvia',
    'Lithuania',
    'Mongolia',
    'Norway',
    'Poland',
    'Ukraine',
  ],
}
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
)

myCountry.population += 2
console.log(myCountry.population)
myCountry['population'] -= 2
console.log(myCountry['population'])

*/

/*

// OBJECT METHODS

// EXAMPLE 1

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1977,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   calcAge: (birthYear) => {
//     return new Date().getFullYear() - birthYear
//   },
// }

// console.log(jonas.calcAge(1977))
// console.log(jonas['calcAge'](1977))

// EXAMPLE 2

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1977,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   calcAge: function () {
//     // console.log(this)
//     return new Date().getFullYear() - this.birthYear
//   },
// }

// console.log(jonas.calcAge())
// console.log(jonas['calcAge']())

// EXAMPLE 3

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1977,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = new Date().getFullYear() - this.birthYear
//     return this.age
//   },
// }

// console.log(jonas.age)
// console.log(jonas.calcAge())
// console.log(jonas.age)

// CHALLENGE

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1977,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear
    return this.age
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  },
}

console.log(jonas.getSummary())
jonas.hasDriversLicense = false
console.log(jonas.getSummary())

*/

/*

// ASSIGNMENT
const myCountry = {
  country: 'Russia',
  capital: 'Moscow',
  language: 'Russian',
  population: 146,
  neighbours: [
    'Azerbaijan',
    'Belarus',
    'China',
    'Estonia',
    'Finland',
    'Georgia',
    'Kazakhstan',
    'North Korea',
    'Latvia',
    'Lithuania',
    'Mongolia',
    'Norway',
    'Poland',
    'Ukraine',
  ],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    )
  },
  checkIsland: function () {
    // this.isIsland = this.neighbours.length === 0 ? true : false
    this.isIsland = !Boolean(this.neighbours.length)
    return this.isIsland
  },
}

myCountry.describe()

myCountry.checkIsland()
console.log(myCountry.isIsland)

myCountry.neighbours = []
myCountry.checkIsland()
console.log(myCountry.isIsland)

*/

/*

// CHALLENGE #3
const mark = {
  fullname: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(1)
    return this.bmi
  },
}

const john = {
  fullname: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(1)
    return this.bmi
  },
}

console.log(mark.calcBMI())
console.log(john.calcBMI())

console.log(
  `${
    mark.calcBMI() > john.calcBMI()
      ? `${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})!`
      : `${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})!`
  }`
)

*/

/*

// ITERATION: THE FOR LOOP

// FOR LOOP KEEPS RUNNING WHILE CONDITION IS TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${'🏋'.repeat(rep)}`)
}

*/

/* 

// ASSIGNMENT
for (let voter = 1; voter <= 50; voter++)
  console.log(`Voter number ${voter} is currently voting`)

*/

/* 

// LOOPING ARRAYS, BREAKING AND CONTINUING
const jonas = [
  'Jonas',
  'Schmedtmann',
  2021 - 1977,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
]

const types = []

for (let i = 0; i < jonas.length; i++) {
  // READING ARRAY
  console.log(jonas[i], typeof jonas[i])

  // FILLING ARRAY
  // types[i] = typeof jonas[i]
  types.push(typeof jonas[i])
}

console.log('types:', types)

const years = [1991, 2007, 1969, 2020]
const ages = []
for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i])
}
console.log(ages)

// CONTINUE
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue
  console.log(jonas[i], typeof jonas[i])
}

// BREAK
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break
  console.log(jonas[i], typeof jonas[i])
}

*/

/* 

// ASSIGNMENT
const worldPercentage = function (population) {
  return +((population / 7900) * 100).toFixed(1)
}
const populations = [1441, 146, 83, 56]
const percentages = []
for (let i = 0; i < populations.length; i++) {
  percentages.push(worldPercentage(populations[i]))
}

console.log('percentages:', percentages)

*/

/* 

// LOOPING BACKWARDS AND LOOPS IN LOOPS
const jonas = [
  'Jonas',
  'Schmedtmann',
  2021 - 1977,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
]

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i])
}

for (let excs = 1; excs <= 3; excs++) {
  console.log(`---------- Starting exercise ${excs}`)
  for (let rep = 1; rep <= 5; rep++) {
    console.log(
      `Exercise ${excs}: Lifting weight repetition ${'🏋️'.repeat(rep)}`
    )
  }
}

*/

/* 

// ASSIGNMENT
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
]

for (let neighbours = 0; neighbours < listOfNeighbours.length; neighbours++) {
  for (
    let neighbour = 0;
    neighbour < listOfNeighbours[neighbours].length;
    neighbour++
  ) {
    console.log(`Neighbour: ${listOfNeighbours[neighbours][neighbour]}`)
  }
}

*/

/* 

// THE WHILE LOOP
let rep = 1
while (rep <= 10) {
  console.log(rep)
  rep++
}

// let tries = 0
// while (+(Math.random() * 6).toFixed() !== 6) {
//   tries++
//   console.log(`Number of tries ${tries}`)
// }

let dice
while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1
  dice !== 6
    ? console.log(`You rolled a ${dice}`)
    : console.log(`Congratulations! It's a ${dice}`)
}

// DO WHILE

let result = ''
let counter = 0
do {
  counter++
  result += counter + ' '
} while (counter > 0 && counter < 5)
console.log(result)

*/

/* 

// ASSIGNMENT
const worldPercentage = function (population) {
  return +((population / 7900) * 100).toFixed(1)
}
const populations = [1441, 146, 83, 56]
const percentages = []

let i = 0
while (i < populations.length) {
  percentages.push(worldPercentage(populations[i]))
  i++
}

console.log('percentages:', percentages)

*/

/* 

// CODING CHALLENGE #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = function (bill) {
  // if (bill >= 50 && bill <= 300) {
  //   return bill * 0.15
  // } else {
  //   return bill * 0.2
  // }
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < bills.length; i++) {
  const bill = bills[i]
  const tip = calcTip(bill)
  tips.push(tip)
  totals.push(bill + tip)
}
console.log(tips)
console.log(totals)

// BONUS
// const calcAverage = function (arr) {
//   let average = arr.reduce((acc, val) => acc + val)
//   return average / arr.length
// }
// console.log(calcAverage(totals))

const calcAverage = function (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

console.log('calcAverage(totals):', calcAverage(totals))
console.log('calcAverage(tips):', calcAverage(tips))

*/
