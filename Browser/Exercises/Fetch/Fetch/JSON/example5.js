/* 
To prevent from circular reference
we can use array of replacer and excluding
properties that can be the reason of circular reference.
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
  JSON.stringify(meeting, ["title", "participants", "place", "name", "number"])
);
/*
  {
    "title":"Conference",
    "participants":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */
