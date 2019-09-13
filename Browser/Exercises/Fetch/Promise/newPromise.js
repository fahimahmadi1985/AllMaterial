var promise = new Promise(function(resolve, reject) {
  resolve("hello");
});
promise.then(data => {
  console.log(data + " world!");
});
promise.then(data1 => {
  console.log(data1 + " world2");
});
