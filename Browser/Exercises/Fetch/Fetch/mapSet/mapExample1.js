/*  var person = {
  firstname: "fahim",
  lastname: "ahmadi"
};
var dci = new Map();
dci.set("Person", person.firstname);
dci.set("Person", person.lastname);
console.log(dci); */

//dci map
var dci = new Map();
dci
  .set("fahim", 32)
  .set("nidal", 33)
  .set("hamid", 37)
  .set("saood", 30);
//console.log(dci);
/* for (let names of dci.keys()) {
  if (names == "hamid") {
    console.log(dci.get(names));
  }
} */

//print all people older than fahim
/* for (let ages of dci.values()) {
  if (ages > dci.get("fahim")) {
    //console.log(ages);
    for (let names of dci.keys()) {
      if (dci.get(names) == ages) {
        console.log(names);
      }
    }
  }
} */

//return list of people who are older than fahim
for (let tuples of dci.entries()) {
  if (tuples[1] > dci.get("fahim")) {
    console.log(tuples[0]);
  }
}
