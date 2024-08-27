'use strict';

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('done'), 2000);
  setTimeout(() => reject(new Error('Something is wrong'), 1000));
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

// example

// {
//   function loadScript(src) {
//     return new Promise(function (resolve, reject) {
//       // let script = document.createElement('script');
//       // script.src = src;
//       // script.onload = () => resolve(script);
//       // script.onerror = () => reject(new Error(`Script load error for ${src}`));
//       // document.head.append(script);

//       resolve('Done!');
//     });
//   }

//   let promise = loadScript('./script.js');
//   console.log(promise.then().__proto__ === Promise.prototype);
// }
