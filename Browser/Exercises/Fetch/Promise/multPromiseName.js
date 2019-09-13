/* 
Write a code to get the full name and return the  Lastname in console with the help 
first promise and in the second promise reverse the lastName and send it to  console.

*/
var fullName = "Ahmadi, Fahim";
new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(fullName.split(","));
  }, 2000);
}).then(lastName => {
  console.log(lastName[1]);
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(
        lastName[1]
          .split("")
          .reverse()
          .join("")
      );
    }, 1000);
  }).then(reverseLastName => {
    console.log(reverseLastName);
  });
});
console.log("after the promise");
