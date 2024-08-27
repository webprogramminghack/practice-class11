'use strict';

// new Promise((resolve, reject) => {
//   throw new Error('Something is wrong');
//   // reject(new Error('Something is wrong'));
// }).catch(({ message }) => console.log(message));

// new Promise((resolve, reject) => {
//   x = 3;
// }).catch(({ name }) => console.log(name));

new Promise((resolve, reject) => {
  reject(new Error('Something is wrong'));
})
  .then(() => console.log('hey everyone'))
  .catch(({ message }) => console.log(message));
