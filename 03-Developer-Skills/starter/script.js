// Remember, we're gonna use strict mode in all scripts now!
'use strict'

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
  // RETURN THE MIN MAX VALUES IN AN ARRAY
  return maxTemp - minTemp
}

console.log(calcAmplitude(temperatures))

// TEST 1
const errorTemps = [2, 6, null, NaN, -10, 32, undefined, true, false]
console.log('=== ERROR TEMPS ===')
console.log(calcAmplitude(errorTemps)) // DON NOT FIND ERRORS
console.log('=== LOW TEMPS ===')
const lowTemps = [-1, -5, -23, -10]
console.log('=== HIGHT TEMPS ===')
console.log(calcAmplitude(lowTemps)) // The min: -23 and max: 0 temperature. 23
const highTemps = [10, 3, 33, 13]
console.log(calcAmplitude(highTemps)) // The min: -23 and max: 0 temperature. 33
// WE HAVE TWO BUGS

// SOLUTION
const calcAmplitudeFixed = function (arr) {
  // DECLARE MIN AND MAX VARIABLES TO STORE THE VALUES
  let minTemp = arr[0]
  let maxTemp = arr[0]
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
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
  // RETURN THE MIN MAX VALUES IN AN ARRAY
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
// MERGE THE TWO ARRAYS INTO ONE
const temperatures2 = [13, 5, 0, -4, 23 - 7, 'error']
const concatinatedTemps = temperatures.concat(temperatures2)
console.log(concatinatedTemps)
const destructuredTemps = [...temperatures, ...temperatures2]
console.log(destructuredTemps)
console.log(calcAmplitudeFixed(destructuredTemps))

// OPTIONAL FILTER DUPLICATES
const filteredTemps = destructuredTemps.filter(
  (item, pos) => destructuredTemps.indexOf(item) === pos
)
console.log(filteredTemps)
console.log(calcAmplitude(filteredTemps))

const calcAmplitudeTwoArrays = function (arr1, arr2) {
  // DECLARE MIN AND MAX VARIABLES TO STORE THE VALUES
  const arr = arr1.concat(arr2)
  console.log(arr)
  let minTemp = arr[0]
  let maxTemp = arr[0]
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
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
  // RETURN THE MIN MAX VALUES IN AN ARRAY
  return maxTemp - minTemp
}

console.log(calcAmplitudeTwoArrays([0, 3, -5, 21, 7], [19, -8, 3, 0, -11]))
