/* 
Must prevent from circular reference
between objects
*/

var room = {
  number: 23
};

var meeting = {
  title: "Conference",
  participants: ["john", "ann"]
};

meeting.location = room; // meetup references room
room.occupiedBy = meeting; // room references meetup

JSON.stringify(meeting); // ***Error: Converting circular structure to JSON ***//
