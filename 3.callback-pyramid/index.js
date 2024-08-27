'use strict';

// function loadScript(src) {
//   let script = document.createElement('script');
//   script.src = src;
//   document.head.append(script);
// }

// loadScript('./script1.js');

// myFunction1();

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('./script1.js', function (script) {
  loadScript('./script2.js', function (script) {
    loadScript('./script3.js', function (script) {
      loadScript('./script4.js', function (script) {});
    });
  });
});
