'use strict';

// let promise = Promise.all(arrayOfPromises);

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3)), 1000),
// ]).then(console.log);

// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//   }),
//   2,
//   3,
// ]).then(console.log);

// all or nothing
// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error('Something is wrong')), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
// ])
//   .then(() => console.log('hello'))
//   .catch((error) => console.log(error.message));

// Promise.allSettled
// {
//   let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://no-such-url',
//     'lalalalalla',
//   ];

//   Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
//     // console.log('results :>> ', results);
//     results.forEach((result, num) => {
//       if (result.status === 'fulfilled') {
//         console.log(`${urls[num]}: ${result.value.status}`);
//       }

//       if (result.status === 'rejected') {
//         console.log(`${urls[num]}: ${result.reason}`);
//       }
//     });
//   });
// }

// yang tercepat saja
// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error('Something is wrong')), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ])
//   .then(console.log)
//   .catch((error) => console.log(error.message));

// yang mana yang tercepat dan resolve
// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error('Something is wrong')), 500)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(console.log, (error) => console.log(error.message));

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error('Ouch!')), 1000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error('Error!')), 2000)
//   ),
// ])
//   .then(console.log)
//   .catch((error) => {
//     console.log(error.__proto__ === AggregateError.prototype);
//     console.log(error.__proto__.__proto__ === Error.prototype);
//   });

// Promise.resolve(value);
// new Promise((resolve) => resolve(value));

// let cache = Map();

// function loadCached(url) {
//   if (cache.has(url)) {
//     return Promise.resolve(cache.get(url));
//   }

//   return fetch(url).then((response) => response.json());
// }

// loadCached().then();

// jarang digunakan
// Promise.reject(new Error('Something is wrong'));
// new Promise((resolve, reject) => reject(new Error('Something is wrong')));

Promise.resolve(1).then(console.log);
