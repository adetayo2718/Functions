'use strict';

//HOF accept a function.

const oneWord = str => {
  return str.toLowerCase().replaceAll(' ', '');
};

const capitalize = str => {
  const joinWord = [];
  const lowerWord = str.toLowerCase().trim();
  const strSplit = lowerWord.split(' ');

  for (const word of strSplit) {
    joinWord.push(word[0].toUpperCase() + word.slice(1));
  }
  return joinWord.join(' ');
};

//HOF ARGUEMENT FUNCTION

const hof = (str, fn) => {
  console.log(`The old name is: ${str}`);
  console.log(`Converted is: ${fn(str)}`);

  return console.log(`THIS WORD IS CONVERTED BY: ${fn.name}`);
};

hof('AdeGboYega AMUsa AdeLeKE', oneWord);
