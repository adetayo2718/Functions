'use strict';

// //Returning a Function.

// const greatUs = function (name) {
//   return () => {};
// };

// const grit = ['Hello Mr', 'Hello Mrs'];

// const gri = arr => {
//   for (const gret of arr) {
//     if (gret.includes('Mr')) return gret;
//   }
// };
// const greet = (arr, fn) => name => console.log(`${fn(arr)}: ${name}`);

// greet(grit, gri)('Adetayo Adebowale Olayiwola');

// console.log(greet(gri));

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
