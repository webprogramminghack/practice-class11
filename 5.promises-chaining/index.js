'use strict';

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     return result * 2;
//   })
//   .then(function (result) {
//     return result * 2;
//   })
//   .then(function (result) {
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// auto flatten
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });

fetch('http://localhost:8080/user')
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then((githubUser) => console.log(githubUser));
