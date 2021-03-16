'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // WRITING METHODS ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orederPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...restIngredients) {
    console.log(mainIngredient, restIngredients);
  },

  // OPENING HOURS
  // openingHours: openingHours,
  // ES6 ENHANCED OBJECT LITERALS
  openingHours,
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
/* 
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

// COPY OBJECTS
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
 */
/* 
// REST PATTERN & PARAMETERS
// DESTRUCTURING
// RECAP SPREAD OPERATOR (RIGHT SIDE OF =)
const arr = [1, 2, 3, ...[4, 5, 6]];
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
// REST (LEFT SIDE OF =)
const [a, b, ...rest] = arr;
console.log(a, b, rest); // 1 2 [ 3, 4, 5, 6 ]

const [pizza, , risotto, ...restFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, restFood);
// REST WITH OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// FUNCTIONS
const add = function (...nums) {
  // console.log(nums);
  // let sum = 0;
  // for (let i = 0; i < nums.length; i++) sum += nums[i];
  // return sum;
  return nums.reduce((acc, val) => acc + val);
};
console.log(add(2, 3));
console.log(add(5, 3, 7, 2));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('mashrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mashrooms');
 */
/* 
// SHORT-CIRCUITING
// USE ANY DATA TYPE, RETURN ANY DATA TYPE
// OR OPERATOR
// IF THE FIRST VALUE IS TRUTHY VALUE IT WILL IMMEDIATELY RETURN THAT FIRST VALUE
// THE OTHER OPERAND WILL NOT EVEN BE EVALUATED
console.log('---- OR ----');
console.log(3 || 'Jonas'); // 3
console.log('', 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10
// AND OPERATOR
// IF THE FIRST VALUE IS FALSY VALUE IT WILL IMMEDIATELY RETURN THAT FIRST VALUE
// THE OTHER OPERAND WILL NOT EVEN BE EVALUATED
console.log('---- AND ----');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && 'Jonas'); // null
// PRACTICAL EXAMPLE
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 */
/* 
// THE NULLISH COALESCING OPERATOR (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// NULLISH: NULL AND UNDEFINED (NOT 0 OR '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
 */
/*  
// CHALLENGE #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/
/* 
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5.
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...players) {
  players.map(player => console.log(player));
  console.log(arguments.length);
};
printGoals(...game.scored);
// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
 */
/* 
//  LOOPING ARRAYS: THE FOR-OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
// USING DESTRUCTURING ASSIGNMENT
for (const [index, item] of menu.entries())
  console.log(`${index + 1}: ${item}`);

console.log(...menu.entries());
 */
/* 
// ENHANCED OBJECT LITERALS
console.log(restaurant.openingHours);

const assortment = ['Books', 'Magazines', 'Electronics Kits', 'Robots'];
const shop = {
  name: 'Webmshop',
  location: 'Grozny, Russia',
  assortment,
  orderDelivery({ order, address, time }) {
    console.log(
      `Your order: ${order} will be delivered to ${address} at ${time}`
    );
  },
};
console.log(shop.assortment);
// WRITING METHODS
restaurant.orderPizza('cheese', 'mashrooms');
const order = {
  order: 'How to get an IT job',
  address: 'Moscow, Russia',
  time: '15:30',
};
shop.orderDelivery(order);
console.log(restaurant.openingHours.sat);
console.log(restaurant.openingHours['sat']);
console.log(restaurant.openingHours['day-6']);

const alerts = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

const elementProps = {
  [`alert-${alerts[0]}`]: {
    // primary
    color: '#004085',
    backgroundColor: '#cce5ff',
    borderColor: '#b8daff',
  },
  [`alert-${alerts[1]}`]: {
    // secondary
    color: '#383d41',
    backgroundColor: '#e2e4e5',
    borderColor: '#d6d8db',
  },
  [`alert-${alerts[2]}`]: {
    // success
    color: '#155724',
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  [`alert-${alerts[3]}`]: {
    // danger
    color: '#721c24',
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  [`alert-${alerts[4]}`]: {
    // warning
    color: '#856404',
    backgroundColor: '#fff3cd',
    borderColor: '#ffeeba',
  },
  [`alert-${alerts[5]}`]: {
    // info
    color: '#0c5460',
    backgroundColor: '#d1ecf1',
    borderColor: '#bee5eb',
  },
  [`alert-${alerts[6]}`]: {
    // light
    color: '#818182',
    backgroundColor: '#fefefe',
    borderColor: '#fdfdfe',
  },
  [`alert-${alerts[7]}`]: {
    // dark
    color: '#1b1e21',
    backgroundColor: '#d6d8d9',
    borderColor: '#c6c8ca',
  },
};
console.log(elementProps);
console.log(elementProps['alert-primary']);
 */
/* 
// OPTIONAL CHAINING (?.)
// console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); // TypeError: Cannot read property 'open' of undefined
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.sat) console.log(restaurant.openingHours.thu.open); // { open: 0, close: 24 }

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);

console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours.thu?.open); // 12

console.log(restaurant.openingHours?.mon?.open); // undefined
console.log(restaurant.openingHours?.thu?.open); // 12

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // const open = restaurant.openingHours[day]?.open || 'closed'; // IF OPEN VALUE IS 0 IT WILL BE CLOSED
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(
    `On ${day}, ${open === 'closed' ? 'we are closed' : `we open at ${open}`}`
  );
}

// CALLING METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist!');

// CHECKING ARRAYS
const users = [
  {
    name: 'Jonas',
    email: 'jonas@example.com',
  },
  {
    name: 'Mark',
    email: 'mark@example.com',
  },
];

// const users = [];

// IF CHECK
if (users.length > 0) console.log(users[0]?.name);
else console.log('Users array is empty'); // Jonas
// USING OPTIONAL CHAINING
console.log(users[0]?.name ?? 'Users array is empty'); // Jonas
 */
/* 
// LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES
// OBJECT.KEYS()
// PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openOn = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openOn += `${day ? `${day}, ` : `.`}`;
}
console.log(openOn);

let message = `We are open on ${properties.length} days: `;
Object.entries(openingHours).map(([key, value], index, array) => {
  message += `${array.length - 1 === index ? `${key}.` : `${key}, `}`;
});
console.log(message);

// OBJECT.VALUES()
const values = Object.values(openingHours);
console.log(values);

// OBJECT.ENTRIES()
const entries = Object.entries(openingHours);
console.log(entries);

for (const entry of entries) {
  console.log(entry);
}
// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
 */
/*  
// CHALLENGE #2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/* x
// 1.
console.log('---- 1 ----');
let num = 0;
for (const goal of game.scored) {
  num++;
  console.log(`Goal ${num}: ${goal}`);
}
// TEACHER'S EXAMPLE
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

game.scored.map((goal, index) => {
  console.log(`Goal ${index + 1}: ${goal}`);
});

// 2.
console.log('---- 2 ----');
let avg = 0;
for (const [k, v] of Object.entries(game.odds)) {
  avg += v;
}
console.log(avg / 3);
// TEACHER'S EXAMPLE
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

const avgNew = Object.values(game.odds).reduce(
  (acc, value, index, array) => acc + value / array.length,
  0
);
console.log(avgNew);

// 3.
console.log('---- 3 ----');
for (const [team, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${
      team !== 'x' ? `victory ${game[team]}: ${value}` : `draw: ${value}`
    }`
  );
}
// TEACHER'S EXAMPLE
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// BUNUS
console.log('---- BONUS ----');
const scores = {};
for (const item of game.scored) {
  scores[item] ? scores[item]++ : (scores[item] = 1);
}
console.log(scores);
// TEACHER'S EXAMPLE
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// DO NOT FORGET THIS SIMPLE EXAMPLE!!!
*/
/* 
const arr = [1, 2, 3, 4, 5];
for (const [i, j] of arr.entries()) {
  console.log(i, j);
}
 */
/* 
// SETS
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }

console.log(new Set('Jonas')); // Set(5) { 'J', 'o', 'n', 'a', 's' }
console.log(new Set()); // Set(0) {}

console.log(ordersSet.size); // 3

console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); // Set(4) { 'Pasta', 'Pizza', 'Risotto', 'Garlic Bread' }

ordersSet.delete('Risotto');
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }

// ordersSet.clear();
// console.log(ordersSet); // Set(0) {}

for (const order of ordersSet) console.log(order);

// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique); // Set(3) { 'Waiter', 'Chef', 'Manager' }

const [x, y, z] = [...staffUnique];
console.log(x, y, z); // Waiter Chef Manager
const foo = [...staffUnique];
console.log(foo); // [ 'Waiter', 'Chef', 'Manager' ]

const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray); // [ 'Waiter', 'Chef', 'Manager' ]

// JUST TO KNOW HOW MANY UNIQUE POSITIONS THERE ARE IN AN ARRAY
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// HOW MANY DIFFERENT LETTERS THERE ARE IN A STRING
console.log(new Set('jonasschmedtmann').size);
 */
/* 
// MAPS: FUNDAMENTALS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

// CALLING THE SET METHOD RETURNS UPDATED MAP SO WE CAN CHAIN IT LIKE THIS:
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open :D
console.log(rest.get(1)); // Firenze, Italy

let time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
time = 9;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); // true

rest.delete(2);
console.log(rest);

console.log(rest.size); // 7

// rest.clear();
// console.log(rest); // Map(0) {}

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // Test

// const h1 = document.querySelector('h1');
// rest.set(h1, 'Heading');
// console.log(rest.get(h1)); // Heading
 */
/* 
// MAPS: ITERATION
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// CONVERT OBJECT TO MAP
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// ITERATION
// console.log('---- QUIZ ----');
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answerf));

// CONVERT MAP TO ARRAY
console.log([...question]);

// METHODS
console.log(question.keys());
console.log(question.values());
console.log(question.entries());

console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);
 */
/* 
// CHALLENGE #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
 */
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/* 
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
// console.log(gameEvents);
// 3.
console.log(
  `An event happened, on average, every ${
    [...gameEvents.keys()][gameEvents.size - 1] / gameEvents.size
  } minutes`
);

// 4.
for (const [time, event] of gameEvents) {
  const half = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${time}: ${event}`);
}
 */
/* 
// WORKING WITH STRINGS - PART 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4

// METHODS
console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1

// SUBSTRING EXTRACTION WITH SLICE FROM THE ORIGINAL STRING
// DOESN'T CHANGE ORIGINAL STRING AND JUST RETURNS A NEW STRING
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

// EXTRACTING THE FIRST AND THE LAST WORDS FROM A STRING
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// SLICING WITH NEGATIVE INDEXES
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   if (seat.indexOf('B') !== -1 || seat.indexOf('E') !== -1)
//     console.log(`It's a middle seat!`);
//   else {
//     console.log(`It's not a middle seat!`);
//   }
// };

// const checkMiddleSeat = function (seat) {
//   const middleSeat =
//     seat.indexOf('B') !== -1 || seat.indexOf('E') !== -1
//       ? 'the middle 😬 seat'
//       : 'lucky 😎';
//   console.log(`You got ${middleSeat}`);
// };
// TEACHER'S EXAMPLE
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B'); // You got the middle seat 😬
checkMiddleSeat('23C'); // You got lucky 😎
checkMiddleSeat('3E'); // You got the middle seat 😬

// WHENEVER WE CALL A METHOD ON A STRING JAVASCRIPT CONVERTS IT TO AN OBJECT
console.log(new String('Jonas')); // [String: 'Jonas']
console.log(typeof new String('Jonas')); // object
console.log(typeof new String('Jonas').slice(1)); // string
 */
/* 
// WORKING WITH STRINGS - PART 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
console.log('Jonas'.toUpperCase()); // JONAS

// FIX CAPITALIZATION IN NAME
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// COMPARING EMAILS (and TRIMMING)
const email = 'jonas@example.com';
const loginEmail = '  Jonas@Example.Com \n';
const normalizedEmail = loginEmail.trim().toLowerCase();
console.log(normalizedEmail); // jonas@example.com
console.log(email === normalizedEmail); // true

// REPLACING DOESN'T CHANGE ORIGINAL STRING AND JUST RETURNS A NEW STRING
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288.97$

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // All passengers come to boarding gate 23. Boarding door 23!

// REPLACEALL
console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

// REPLACE ALL OCCURANCES WITH REGEX
console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

// BOOLEANS
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Airb')); // true

const isNew =
  plane.startsWith('Airbus') &&
  plane.endsWith('neo') &&
  'Part of the NEW Airbus family';
// console.log('Part of the NEW Airbus family');
console.log(isNew); // Part of the NEW Airbus family

// PRACTICE EXERCISE
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  baggage.includes('gun') || baggage.includes('knife')
    ? console.log('You are NOT allowed on board!')
    : console.log('Welcome aboard!');
};

checkBaggage('I have a Laptop, some Food and a pocket Knife'); // You are NOT allowed on board!
checkBaggage('Socks and camera'); // Welcome aboard!
checkBaggage('Got some snacks and a gun for protections'); // You are NOT allowed on board!
 */
// WORKING WITH STRINGS - PART 3
/* 
// SPLIT
console.log('a+very+nice+string'.split('+')); // [ 'a', 'very', 'nice', 'string' ]
console.log('Jonas Schmedtmann'.split(' ')); // [ 'Jonas', 'Schmedtmann' ]

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName); // Jonas Schmedtmann

// JOIN
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Jonas SCHMEDTMANN

// PRACTICE EXERCISE
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // WITH SLICE
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // WITH REPLACE
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis'); // Jessica Ann Smith Davis
capitalizeName('jonas schmedtmann'); // Jonas Schmedtmann

// PADDING
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+')); // +++++++Go to gate 23++++++++++
console.log('Jonas'.padStart(20, '+').padEnd(30, '+')); // +++++++++++++++Jonas++++++++++

// PRACTICE EXERCISE
const maskCreditCard = function (number) {
  // a nice trick to convert a number to a sting
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(1234123412341234)); // ************1234
console.log(maskCreditCard('5678567856785678')); // ************5678

// REPEAT
const weatherMessage = 'Bad weather... All Departures Delayed... \n';
console.log(weatherMessage.repeat(5));

// PRACTICE EXERCISE
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
 */
// CHALLENGE #4
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
const variableNames = [
  'underscore_case_variable\n',
  ' first_name\n',
  'Some_Variable\n',
  ' calculate_Age\n',
  'delayed_departure\n',
  'normalizedVariable',
];

// const normalizeVariableNames = function (names) {
//   for (const name of names) {
//     // DELETE ALL SPACES AND LINE FEEDSZZ
//     const trimmedName = name.trim();
//     // CHAMGE TO LOWER CASE IF name HAS _
//     const lowerCaseName =
//       trimmedName.indexOf('_') !== -1 ? trimmedName.toLowerCase() : trimmedName;
//     //
//     const index = lowerCaseName.indexOf('_') + 1;
//     const letter = lowerCaseName[index];
//     const normalizedName = lowerCaseName.replace(
//       `_${letter}`,
//       letter.toUpperCase()
//     );
//     console.log(normalizedName);
//   }
// };

// normalizeVariableNames(variableNames);

// TEACHER'S EXAMPLE
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  console.log(text);
});
