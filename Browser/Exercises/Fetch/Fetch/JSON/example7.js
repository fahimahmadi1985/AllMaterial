/* 

parameter Space in stringify function
This parameter usually used to make some indent when content of JSON element displayed.

*/

var user = {
  name: "Fahim",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

console.log(JSON.stringify(user, null, 5));
/* two-space indents:
  {
    "name": "Fahim",
    "age": 25,
    "roles": {
      "isAdmin": false,
      "isEditor": true
    }
  }
  */

/* for JSON.stringify(user, null, 4) the result would be more indented:
  {
      "name": "Fahim",
      "age": 25,
      "roles": {
          "isAdmin": false,
          "isEditor": true
      }
  }
  */
