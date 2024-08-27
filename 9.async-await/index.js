'use strict';

async function f() {
  return 1;
}

// console.log(f().__proto__ === Promise.prototype);

// f().then(console.log);

// flatten feature
{
  async function f() {
    return Promise.resolve('Done!');
  }

  // f().then(console.log);
}

// await
{
  // microtask queue
  async function f() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Done!'), 1000);
    });

    let result = await promise; // wait until the promise resolves and return the result

    console.log(result);
  }

  // f();

  // console.log('Hello');
}

// cannot use await in a non-async function
// {
//   async function f() {
//     let promise = Promise.resolve(1);
//     let result = await promise;
//   }
// }

// error handling
{
  async function f() {
    try {
      let response = await fetch('http://no-such-url');
    } catch (err) {
      console.log(err.name);
    }
  }

  f();
}
