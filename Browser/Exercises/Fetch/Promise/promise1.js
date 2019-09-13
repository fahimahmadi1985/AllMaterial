new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("hello");
    reject("custom error");
  }, 1000);
})
  .then(function(result) {
    return result + " world!";
  })
  .then(sentence => {
    console.log(sentence);
  })
  .catch(err => {
    console.log("some error" + err);
  })
  .finally(result1 => {
    console.log("Finally block executed " + result1);
  });
