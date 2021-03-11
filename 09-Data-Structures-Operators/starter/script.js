'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orederPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* 
const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]
console.log(a, b, c)
 */
/* 
// DESTRUCTURING AN ARRAY (DESTRUCTURING ASSIGNMENT) []
const [x, y, z] = arr
console.log(x, y, z)
console.log(arr)
 */
/* 
// WE SKIP THE SECOND ELEMENT IN THE ARRAY
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian
// TO SWITCH VARIABLES
// const temp = main
// main = secondary
// secondary = main
// console.log(main, secondary) // Vegetarian Vegetarian
// BETTER WAY TO SWITCH ELEMENTS USING DESTRUCTURING
[main, secondary] = [secondary, main];
console.log(main, secondary);
// RECEIVE 2 RETURN VALUES FROM A FUNCTION
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza
// NESTED ARRAY DESTRUCTURING (DESTRUCTURING INSIDE OF DESTRUCTURING)
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested
// console.log(i, j) // 2 [ 5, 6 ]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6
// DEFAULT VALUES
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

// DESTRUCTURING OBJECTS {}
// PROVIDE THE VARIABLE NAMES THAT EXACTLY MATCH THE PROPERTY NAMES THAT YOU WANT TO RETRIEVE FROM THE OBJECT
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// IF WE WANT THE VARIABLE NAMES TO BE DIFFERENT FROM THE PROPERTY NAMES
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// MUTATING VARIABLES WHILE DESTRUCTURING OBJECTS
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// NESTED OBJECTS DESTRUCTURING
// const { fri } = openingHours;
// console.log(fri); // { open: 11, close: 23 }

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); // 11 23

// DIFFERENT VARIABLE NAMES
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Grozny, 50',
  starterIndex: 3,
});

*/

/* 

// RECAP DESTRUCTURING ARRAYS
const [a, , [c, d, e]] = [1, 2, [3, 4, 5]];
console.log(a, c, d, e);

const employees = ['Mark', 'John', 'Steve', 'Jane'];
let [designer, engineer] = employees;
console.log(designer, engineer);
[engineer, designer] = [designer, engineer];
console.log(designer, engineer);

const getCoords = function (lat, lon) {
  return [lat, lon];
};
const [lat, lon] = getCoords(43.1234, 45.5678);
console.log(lat, lon);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

const url = 'https://developer.mozilla.org/en-US/Web/JavaScript';
const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
const [, protocol, fullhost, fullpath] = parsedURL;
console.log(protocol, fullhost, fullpath);
 */
// RECAP DESTRUCTURING OBJECTS
/* 
const person = {
  firstName: 'John',
  lastName: 'Doe',
  job: 'web developer',
  skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'SQL'],
};

const { skills: abilities = [], projects = [] } = person;
console.log(abilities, projects);

let ip = '10.25.32.121';
let port = 5;
({ ip, port } = { ip: '10.26.72.178', port: 27 });
console.log(ip, port);

const ftthProjects = {
  unit: {
    ip: '10.25.32.121',
    model: 'Alpha-A28F',
    address: 'st.Peter 50, Grozny, Russia',
    coords: [43.1234, 45.5678],
  },
};

const { unit } = ftthProjects;
console.log(unit);

const {
  unit: {
    address,
    coords: [lat, lon],
  },
} = ftthProjects;
console.log(address, lat, lon);

const {
  unit: { coords: location },
} = ftthProjects;
console.log(location);

const { length } = 'A string';
console.log(length);

const note = {
  id: 1,
  title: 'My first note',
  date: '01/01/1970',
};

Object.entries(note).forEach(([key, value]) => {
  console.log(key, value);
});

const newArray = Object.entries(note);
console.log(newArray);
newArray.forEach(([k, v]) => console.log(k, v));

for (const [key, value] of Object.entries(note)) {
  console.log(`${key}: ${value}`);
}
 */
/* 

const note = {
  title: 'My first note',
  author: {
    firstName: 'Sherlock',
    lastName: 'Holmes',
  },
  tags: ['personal', 'writing', 'investigations'],
};

const {
  title,
  date = new Date(),
  author: { firstName },
  tags: [personalTag, writingTag],
} = note;
console.log(title, date, firstName, personalTag, writingTag);

console.log([...'hello']);
 */
// THE SPREAD OPERATOR (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newGoodArr = [1, 2, 3, ...arr];
console.log(newGoodArr);
console.log(...newGoodArr);
console.log(1, 2, 3, 7, 8, 9);

const mainMenu = ['Pizza', 'Pasta', 'Risotto'];
const newMenu = [...mainMenu, 'Goosh'];
// const newMenu = [...restaurant.mainMenu, 'Goosh'];
console.log(newMenu);

// COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];
const mainMenuCopy = [...mainMenu];
console.log(mainMenuCopy);

// JOIN ARRAYS (MERGE TOGETHER)
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
const menu = [...new Set([...mainMenu, ...newMenu])];
console.log(menu);

// JS ITERABLES: ARRAYS, STRINGS, MAPS, SETS. NOT OBJECTS
console.log([...'hello', ' ', 'S.']);

console.log(...'hello');
console.log('h', 'e', 'l', 'l', 'o');

const ingredients = ['1', '2', '3'];
restaurant.orederPasta(...ingredients);

const anOrder = function (ing1, ing2, ing3) {
  console.log(`Here is your order with: ${ing1}, ${ing2} and ${ing3}`);
};

anOrder(...ingredients);

// OBJECTS
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
