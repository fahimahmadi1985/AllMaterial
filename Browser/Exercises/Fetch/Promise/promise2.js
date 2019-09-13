new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(1);
  }, 1000);
}).then(firstResult => {
  console.log(firstResult);
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(firstResult * 2);
    }, 1000);
  }).then(secondResult => {
    console.log(secondResult);
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve(secondResult * 2);
      }, 1000);
    }).then(thirdResult => {
      console.log(thirdResult);
    });
  });
});
