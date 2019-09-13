new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  }, 1000);
}).then(firstResult => {
  console.log(firstResult);
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(firstResult * 2);
    }, 2000);
  }).then(secondResult => {
      console.log(secondResult);
      
  });
});
