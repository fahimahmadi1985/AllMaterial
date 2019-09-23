var p = new Promise((resolve, reject) => {
  var momIsHappy = false;
  if (momIsHappy) {
    resolve("I have a phone now");
  } else {
    reject("mom says sorry");
  }
})
  .then(input => {
    console.log(input);
  })
  .catch(err => {
    console.log(err);
  });
