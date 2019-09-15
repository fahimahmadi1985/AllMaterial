/* 
JSON is data-only language-independent specification, 
so some JavaScript-specific object properties are skipped 
by JSON.stringify.
    Namely:
        - Function properties (methods).
        - Symbolic properties.
        - Properties that store undefined.
*/

var user = {
  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

console.log(JSON.stringify(user));

//output will be {}
