'use strict';

//More examples on closure

// EXAMPLE 1

let f;

const g = () => {
  const a = 23;

  f = () => {
    console.log(`Double is equal to: ${a * 2}`);
  };
};

const h = () => {
  const b = 778;

  f = () => {
    console.log(`Double is equal to: ${b * 2}`);
  };
};

console.log(f);
g();
f();
h();
f();

// EXAMPLE 2

const bookPassengers = (passNum, waitTime) => {
  const passengerGroup = passNum / 3;

  setTimeout(function () {
    console.log(`There are ${passNum} Passengers waiting to board`);
    console.log(`We will book passengers in ${passengerGroup} groups`);
  }, waitTime * 1000);

  console.log(`We will start booking passengers in ${waitTime} mintues`);
};

bookPassengers(210, 2);

// //CLOSURES.

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     if (passengerCount <= 1)
//       console.log(`There is:  ${passengerCount} passenger`);
//     else console.log(`There are: ${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// //IMMEDIATELY INVOKED FUNCTION EXPRESSION IIFE.
// //this is used when you just want to run a set of code once.

// function buyNow() {
//   console.log(`We bought it already`);
// }
// buyNow(); /* This could still be called somewhere else because its stored in a variable*/

// (function () {
//   console.log(`This will display once `);
// })(); /*The function throws an error because the function name is not declared and the is not assigned to any variable*/

// /* The above function works beccause the whole function was wrapperd in a parenthesis (), and it was immediately called after. */

// (() => console.log(`This will ALSO work`))();

// // THE BIND METHOD
// //example.

// const resturant = {
//   name: 'Lacusine',
//   owner: 'Agbaje Lawal',
//   mainMenu: ['Rice', 'Beans', 'Swallow'],
//   starterMenu: ['ice cream', 'cake', 'Fruits'],
//   orderBookings: [],
//   plane: 300,
//   buyPlane() {
//     console.log(this);

//     this.plane++;
//     console.log(this.plane);
//   },
//   order(mainMenuIndex = 1, starterMenuIndex = 0, customer) {
//     console.log(
//       `${customer} ordered for ${this.mainMenu[mainMenuIndex]} with ${this.starterMenu[starterMenuIndex]} as starter from ${this.name}.`
//     );
//     this.orderBookings.push(
//       `${customer} ordered: ${this.mainMenu[mainMenuIndex]} with ${this.starterMenu[starterMenuIndex]} as starter from ${this.name}.`
//     );
//   },
// };

// const resturant2 = {
//   name: 'Belajio',
//   owner: 'Agbaje Lawal',
//   mainMenu: ['Ofe Onugbu', 'isi ewu', 'egusi'],
//   starterMenu: ['strawberries', 'pawpaw', 'orange'],
//   orderBookings: [],
// };

// const order = resturant.order;

// const orderRes2 = order.bind(resturant2, 2, 0);
// orderRes2('sule igbira');

// // USING THE BIND METHOD WITH EVENT LISTENERS

// document
//   .querySelector('.buy')
//   .addEventListener('click', resturant.buyPlane.bind(resturant));

// //PARTIAL APPLICATION

// const addVat = (rate, value) => console.log(value + value * rate);
// addVat(0.1, 23);

// //with bind
// const addVatRate = addVat.bind(null, 0.097);
// addVatRate(23);
// // // //The call and Apply Method.

// const vatCal = function (rate) {
//   return function (value) {
//     const vat = rate * value;
//     console.log(vat);
//   };
// };

// const vatCalulator = vatCal(0.2);
// vatCalulator(200);

// const resturant = {
//   name: 'Lacusine',
//   owner: 'Agbaje Lawal',
//   mainMenu: ['Rice', 'Beans', 'Swallow'],
//   starterMenu: ['ice cream', 'cake', 'Fruits'],
//   orderBookings: [],
//   order(mainMenuIndex = 1, starterMenuIndex = 0, customer) {
//     console.log(
//       `${customer} ordered for ${this.mainMenu[mainMenuIndex]} with ${this.starterMenu[starterMenuIndex]} as starter from ${this.name}.`
//     );
//     this.orderBookings.push(
//       `${customer} ordered: ${this.mainMenu[mainMenuIndex]} with ${this.starterMenu[starterMenuIndex]} as starter from ${this.name}.`
//     );
//   },
// };

// const resturant2 = {
//   name: 'Belajio',
//   owner: 'Agbaje Lawal',
//   mainMenu: ['Ofe Onugbu', 'isi ewu', 'egusi'],
//   starterMenu: ['strawberries', 'pawpaw', 'orange'],
//   orderBookings: [],
// };

// // /* TO use the Call Method, We need to store the function in a variable.*/

// const order = resturant.order;

// const orderItems = [1, 1, 'Racheal Abayo'];

// const orderItems2 = [, , 'Racheal Abayo'];

// order.call(resturant, 2, 1, 'Olashile Omofolain');
// console.log(resturant.orderBookings);

// order.call(resturant2, 2, 1, 'Saheed Shittu');
// console.log(resturant2.orderBookings);

//APPLY METHOD => THE Apply method is the same with the call method, it has the only difference is, (it take the object the this. keyword is pointing to and an array of items as its arguement. ) eg.

// order.apply(resturant, orderItems);
// console.log(resturant.orderBookings);

// order.apply(resturant, orderItems2);
// console.log(resturant.orderBookings);

//This method is not being used often in the new JS es6 -> because of the spread operators
// order.call(resturant, ...orderItems);

//THE CALL METHOD
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name, fn) {
//     //the this. keyword is referring to the lufthansa object. this. is used to assess other properties in an object from an object method
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push(`Flight ${this.iataCode}${flightNum} ` + name);
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtman');
// lufthansa.book(995, 'John Dough');
// lufthansa.book(200, 'John Dough');
// console.log(lufthansa.bookings);

// //Creating a new airline.
// const eurowings = {
//   airline: 'eurowing',
//   iataCode: 'EL',
//   bookings: [],
// };

// //WE COULD SET THE BOOK FUNCTION TO A NEW VARIABLE AND USE IT ON THE SECOND AIRLINE, HOWEVER, THAT WILL NOT WORK BECAUSE THE this. KEYWORD WILL BE UNDEFINED. e.g.

// const book = lufthansa.book;

// // book(23, 'Sarah Williams')
// /* this will not work because the this. keyword from the lufthansa.book method will not apply on the eurowings method. */

// //To introduce the call, we can link two different object together to use the same this. keyword, we use the CALL method
// //The call method will take in 2 set of arguements. 1. THE this.arg(that is, the new object we are pointing to) 2. The arguements of the original function.

// book.call(eurowings, 23, 'Sarah Williams');
// book.call(eurowings, 23, 'Taiwo Dada');
// book.call(lufthansa, 23, 'john Williams');
// console.log(eurowings);
// console.log(lufthansa);

// //Returning a Function.

// const greet = function (greeting) {
//   return name => {
//     console.log(`${greeting} ${name}`);
//     console.log(`Greetings by ${greet.name}`);
//   };
// };

// let greeter = greet('Hello');
// //greeter is now a new function, returned by greet. It will now take its own parameters.
// greeter('Ogunji');

// //HIGHER ORDER FUNTIONS.

// //=> Functions that either take other functions as an arguement or return a function or do both.

// //FOR EXAMPLE, LETS CREATE A FUNCTION THAT TURNS STRINGS TO LOWERCASE.

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), other].join(' ');
// };

// //Higher-order Function.

// const transformer = function (str, fn) {
//   console.log(`Transformed from ${str} to ${fn(str)}`);
//   // The name below is the name is a function method used to get the name of a function.
//   console.log(`Transform by: ${fn.name}`);
// };

// transformer('adebowale Adetayo', oneWord);
// transformer('adebowale Adetayo', upperFirstWord);
// //NOTE that in the above, the transformer function is the HIGH-ORDER-FUNCTION and the oneWord/upperFirstWord are the call-back functions.

// //JS uses call-back functions all the time. e.g:

// const danger = () => {
//   console.log();
// };

// document.body.addEventListener('click', danger);

// //Call backs also works on the for each method.
// ['Tailor', 'Programmer', 'Doctor'].forEach(danger);

// // HOW PASSING ARGUEMENTS WORK IN FUNCTIONS: VALUE AND REFERENCE:

// const flight = 'TX3124';
// const kenny = {
//   name: 'Adeleke Adesanya',
//   passport: 2234113452,
// };

// const ckeckIn = (flightNum, passenger) => {
//   flightNum = 'TX1199';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 2234113452) alert('You have checked in');
//   else alert('Oops, somthing went wrong');
// };

// // ckeckIn(flight, kenny);
// // console.log(flight);
// // console.log(kenny);

// // If the passport number changes in another function pointing to the object, it changes the value of the passport number on the original object.

// const newPassport = person => {
//   person.passport = 256617881888;
// };
// newPassport(kenny);
// ckeckIn(flight, kenny);

// //DEFAULT PARAMETERS

// const createBooking = (
//   flightNum,
//   numPassengers = 1,
//   price = 350 * numPassengers
// ) => {
// ES5
// numPassengers = numPassengers || 1;
//   price = 350 * numPassengers
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
// };

// createBooking('NG123');
// createBooking('NG123', 2);
// createBooking('NG123', 10);
// createBooking('NG123', undefined, 5);
