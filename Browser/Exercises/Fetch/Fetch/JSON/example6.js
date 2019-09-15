/* 
Since its possible to use function(key, value)
instead of replacer array, lets see how to implement it.
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

console.log(
  JSON.stringify(meeting, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return key == "occupiedBy" ? undefined : value;
  })
);

/* key:value pairs that come to replacer:
  :             [object Object]
  title:        Conference
  participants: [object Object],[object Object]
  0:            [object Object]
  name:         John
  1:            [object Object]
  name:         Alice
  place:        [object Object]
  number:       23
  */
