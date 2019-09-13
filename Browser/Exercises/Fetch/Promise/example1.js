/* simple example of Promise usage
   1- create an instance of promise
   2- use a callback function inside the constructor
   3- this callback function contain resolve and reject functions
   4- if promise fullfiled then resolve will be called otherwise reject will be invoked
   5- in the consumer block then function is corresponding to resolve and catch block corresponding to reject

   note: promises are asynchronuse
*/
var promise = new Promise((resolve, reject) => {
  setTimeout(function() {
    var condition = true;
    if (condition) {
      resolve("hello world.");
    } else {
      reject("this is an error.");
    }
  }, 2000);
}).then(data => {
  console.log(data);
});

promise.catch(err => {
  console.log(err);
});
