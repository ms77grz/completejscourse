// Remember, we're gonna use strict mode in all scripts now!
'use strict'

/* 
// TODO: PROBLEM 1

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

const calcAmplitude = function (arr) {
  // DECLARE MIN AND MAX VARIABLES TO STORE THE VALUES
  let minTemp = 0
  let maxTemp = 0
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    // CHECK FOR ERRORS
    if (temp === 'error') {
      console.log(`ERROR FOUND SKIP [${temp}]`)
      continue
      // GET MIN TEMP
    } else if (temp < minTemp) {
      minTemp = temp
      // GET MAX TEMP
    } else if (temp > maxTemp) {
      maxTemp = temp
    } else continue
  }
  console.log(`The min: ${minTemp} and max: ${maxTemp} temperature.`)
  // RETURN TEMPERATURE AMPLITUDE
  return maxTemp - minTemp
}

console.log(calcAmplitude(temperatures))

// TEST 1

// WE HAVE A BUG

const errorTemps = [2, 6, null, NaN, -10, 32, undefined, true, false]
console.log('=== ERROR TEMPS ===')
console.log(calcAmplitude(errorTemps)) // DON NOT FIND ERRORS

// WE HAVE ANOTHER TWO BUGS

console.log('=== LOW TEMPS ===')
const lowTemps = [-1, -5, -23, -10]
console.log('=== HIGHT TEMPS ===')
console.log(calcAmplitude(lowTemps)) // The min: -23 and max: 0 temperature. 23
const highTemps = [10, 3, 33, 13]
console.log(calcAmplitude(highTemps)) // The min: -23 and max: 0 temperature. 33

// SOLUTION

const calcAmplitudeFixed = function (arr) {
  // DECLARE MIN AND MAX VARIABLES TO STORE THE VALUES / first item of an array
  let minTemp = arr[0]
  let maxTemp = arr[0]
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    // CHECK FOR ERRORS / is number is NaN
    if (typeof temp !== 'number' || isNaN(temp)) {
      console.log(`ERROR FOUND SKIP [${temp}]`)
      continue
      // GET MIN TEMP
    } else if (temp < minTemp) {
      minTemp = temp
      // GET MAX TEMP
    } else if (temp > maxTemp) {
      maxTemp = temp
    } else continue
  }
  console.log(`The min: ${minTemp} and max: ${maxTemp} temperature.`)
  // RETURN TEMPERATURE AMPLITUDE
  return maxTemp - minTemp
}

// TEST 2
console.log('=== ERROR TEMPS ===')
console.log(calcAmplitudeFixed(errorTemps)) // NOW WE SEE ALL TYPES OF ERRORS
console.log('=== LOW TEMPS ===')
console.log(calcAmplitudeFixed(lowTemps)) // The min: -23 and max: -1 temperature. 22
console.log('=== HIGHT TEMPS ===')
console.log(calcAmplitudeFixed(highTemps)) // The min: 3 and max: 33 temperature. 30

// TODO: PROBLEM 2

// FUNCTION SHOULD NOW RECEIVE 2 ARRAYS OF TEMPS

// MERGING TWO ARRAYS WITH CONCATCATINATION
const temperatures2 = [13, 5, 0, -4, 23 - 7, 'error']
const concatinatedTemps = temperatures.concat(temperatures2)
console.log(concatinatedTemps)

// MERGING TWO ARRAYS WITH DESTRUCTURING
const destructuredTemps = [...temperatures, ...temperatures2]
console.log(destructuredTemps)
console.log(calcAmplitudeFixed(destructuredTemps))

const calcAmplitudeTwoArrays = function (arr1, arr2) {
  // DECLARE MIN AND MAX VARIABLES TO STORE THE VALUES
  const arr = arr1.concat(arr2)
  let minTemp = arr[0]
  let maxTemp = arr[0]
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i]
    // CHECK FOR ERRORS
    if (typeof temp !== 'number' || isNaN(temp)) {
      console.log(`ERROR FOUND SKIP [${temp}]`)
      continue
      // GET MIN TEMP
    } else if (temp < minTemp) {
      minTemp = temp
      // GET MAX TEMP
    } else if (temp > maxTemp) {
      maxTemp = temp
    } else continue
  }
  console.log(`The min: ${minTemp} and max: ${maxTemp} temperature.`)
  // RETURN TEMPERATURE AMPLITUDE
  return maxTemp - minTemp
}

console.log(calcAmplitudeTwoArrays([0, 3, -5, 21, 7], [19, -8, 3, 0, -11]))

// OPTIONAL FILTER DUPLICATES FROM ONE ARRAY
const c = [1, 2, 3, 4, 5, 1]
console.log('OPTIONAL FILTERING')
const filteredTemps = c.filter((item, pos) => {
  console.log(`item:${item} indexOf(item)${c.indexOf(item)} pos:${pos}`)
  return c.indexOf(item) === pos
})
console.log(filteredTemps)

// OPTIONAL FILTER DUPLICATES FROM TWO ARRAYS

const input = [
  [1, 2, 3],
  [101, 2, 1, 10],
  [2, 1],
]
const mergeDedupe = arr => {
  return [...new Set([].concat(...arr))]
}

console.log('output', mergeDedupe([1, 2, 1, 2, 3, 2, 3, 4]))

const newSet = [...new Set([1, 2, 3, 2, 1, 2, 3, 4])]
console.log(newSet)
console.table(newSet)

 */

/* 
// TODO: PROBLEM 3

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number('10'), // prompt input value converted from strint to number
  }
  const kelvin = measurement.value + 273
  return kelvin
}

console.log('measureKelvin():', measureKelvin())

// TODO: CODING CHALLENGE
const temps1 = [17, 21, 23]
const temps2 = [12, 5, -5, 0, 4]

const printForecast = function (arr) {
  let message = ''
  for (let i = 0; i < arr.length - 1; i++) {
    message += `${arr[i]}℃ in ${i + 1} days ... `
  }
  console.log(`... ${message}`)
}

printForecast(temps1)
console.log('SECOND RUN')
printForecast(temps2)

 */

// arrow function for example

let age = prompt('Сколько Вам лет?', 18)
let welcome = age < 18 ? () => alert('Привет') : () => alert('Здравствуйте!')
welcome() // теперь всё в порядке
