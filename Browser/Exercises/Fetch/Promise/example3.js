/* 
Passing return values from one function to the other
with the help of promise and then function

*/

var promise = new Promise(function(resolve, reject) {
  resolve(2);
});

promise
  .then(first)
  .then(second)
  .then(third)
  .then(function(response) {
    console.log("response: " + response);
  });

function first(value) {
  return value + 2;
}

function second(value) {
  return value + 4;
}

function third(value) {
  return value + 6;
}
