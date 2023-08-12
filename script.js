'use strict';

//SECTION 2 FUNCTIONS
//DEFAULT PARAMETERS

const createBooking = (
  flightNum,
  numPassengers = 1,
  price = 350 * numPassengers
) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
};

createBooking('NG123');
createBooking('NG123', 2);
createBooking('NG123', 10);
createBooking('NG123', 5);
