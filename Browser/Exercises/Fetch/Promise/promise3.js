/* 
Array of promises and start of a new process after finishing
all promises.
*/

Promise.all([
  (fp = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(1);
    });
  }).then(firstPromise => {
    console.log(firstPromise);
  })),
  (sp = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(4);
    }, 3000);
  }).then(secondPromise => {
    console.log(secondPromise);
  }))
])
  .then(() => {
    console.log("all promises done");
  })
  .catch(() => {
    console.log("there is an error in this file");
  });
