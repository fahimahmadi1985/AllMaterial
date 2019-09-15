var user = {
  name: "fahim",
  lname: `ahmadi`,
  age: 32,
  brothers: [{ name: "omid" }, { name: "wahid" }] //nested objects will be stringify as well
};

var userJsonFormat = JSON.stringify(user);
console.log(userJsonFormat);
