'use strict'

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
