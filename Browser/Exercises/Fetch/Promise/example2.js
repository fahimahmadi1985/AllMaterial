const fs = require("fs");

/* 
   Approach 1 to read a file asyncronously
   Here we are using predefined functions of filesystem module
   fs.readFile() is an asyncronous function but it is predefined

   since the old approach is called after 2second so the rest of js
   statements will be executed first.
*/
setTimeout(function() {
  fs.readFile("data.txt", function(err, data) {
    console.log("Approach1");
    console.log(`Text length: ${data.toString().length}`);
    console.log("***************************");
  });
}, 2000);

/* 
  Approach 2 to read a file asyncronously
  Here we are using promises and as you know promises working async
  you are now allowed to use more than one resolve or reject per promise
  otherwise except first one the rest will be skipped
*/

var promise = new Promise(function(resolve, reject) {
  fs.readFile("data.txt", function(err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

//you can have more than one then block per promise
promise.then(data => {
  console.log("Approach2");
});

promise.then(data => {
  console.log(`Text Length: ${data.toString().length}`);
  console.log("*****************************");
});

promise.catch(err => {
  console.log(err);
});
