'use strict';

// num = 1;

// throw ReferenceError('num is not defined');

// console.log(ReferenceError.prototype.__proto__ === Error.prototype);
// console.log(Error.prototype.__proto__ === Object.prototype);

// const json = '{bad json}';

// const user = JSON.parse(json);

// console.log(SyntaxError.prototype.__proto__ === Error.prototype);

// try {
//   console.log('Start of try runs');

//   lalala; // error, variable is not defined!

//   console.log('will not be printed');
// } catch (err) {
//   console.log('Error has occured!');
// }

// try {
//   setTimeout(function () {
//     noSuchVariable;
//   }, 1000);
// } catch (err) {
//   console.log('catch');
// }

// setTimeout(function () {
//   try {
//     noSuchVariable;
//   } catch (err) {
//     console.log('catch');
//   }
// });

// try {
//   lalala;
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// }

function functionA() {
  functionB();
}

function functionB() {
  functionC();
}

function functionC() {
  someUndefinedFunction();
}

// try {
//   functionA();
// } catch (error) {
//   console.log('Stack trace:', error.stack);
// }

{
  let json = '{ "age": 30 }';

  try {
    let user = JSON.parse(json);

    // lalala;

    if (!user.name) {
      throw new SyntaxError('Incomplete data: no name');
    }
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.log('JSON Error:', err.message);
    } else {
      throw err;
    }
  }
}

{
  const num = 35;

  function doubleNumber(n) {
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error('Must be a non-negative integer');
    }
    return n * 2;
  }

  const start = Date.now();
  let result;
  let diff;

  try {
    result = doubleNumber(num);
  } catch (err) {
    // result = 'error occured';
    // console.log(error.name);
    // console.log(error.message);
  } finally {
    diff = Date.now() - start;
  }

  console.log(result);
  console.log(`Execution took ${diff}ms`);
}

// throw Error('something is wrong');

// num = 3;
throw new ReferenceError();
