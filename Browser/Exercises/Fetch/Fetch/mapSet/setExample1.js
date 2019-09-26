var set = new Set(["fahim", "hamid", "nidal", "saood", "hamid"]);

set.add("lava");
//set.delete("hamid");
//set.clear();
if (set.has("hamid")) {
  ///console.log("hamid is here");
} else {
  //console.log("where are you hamid?");
}
//console.log(set.size);

// #####################################
var set2 = new Set();
///console.log(set2.size);
set2.add("fahim");
set2.add("fahim");
//console.log(set2);
//console.log(set2.size);

// ################################3

for (let names of set.entries() /* set.values() is the same as set.keys() */) {
  // console.log(names);
}

//##########################3
//write a program that has a set of name and convert this set to map
//in a way that key be equal to reverse format of name and value be equal
//to names
var setNames = new Set(["fahim", "noor", "nidal", "wael", "hafeez", "eyham"]);
var mapNames = new Map();
for (let names of setNames) {
  var reverseName = names
    .split("")
    .reverse()
    .join("");
  mapNames.set(reverseName, names);
}

//console.log(mapNames);

//#####################################3
//write a program that has 2 set (1-set of names 2-set of ages). try to map names to ages
//and create a map collection
var setNames = new Set(["fahim", "hamid", "nidal"]);
var setAges = new Set([32, 37, 33]);
var mapNamesAges = new Map();
var nameCounter = 0;
var ageCounter = 0;

for (var names of setNames) {
  for (var ages of setAges) {
    if (nameCounter == ageCounter) {
      mapNamesAges.set(names, ages);
    }
    console.log("(" + nameCounter + " , " + ageCounter + ")");
    ageCounter++;
  }
  nameCounter++;
  ageCounter = 0;
}
console.log(mapNamesAges);
