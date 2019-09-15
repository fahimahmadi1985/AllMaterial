/* 
Excluding and Transforming
var json = JSON.stringify(value, [, replacer, space])
value     =>  A value to encode.
replacer  =>  Array of properties to encode or a mapping function function(key, value).
space     =>  Amount of space to use for formatting

*/

var room = {
  number: 23
};

var meeting = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room // meeting references room
};

room.occupiedBy = meeting; // room references meeting

console.log(JSON.stringify(meeting, ["title", "participants"]));
// {"title":"Conference","participants":[{},{}]}

console.log(JSON.stringify(meeting, ["title", "participants", "name"]));
//{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}]}
