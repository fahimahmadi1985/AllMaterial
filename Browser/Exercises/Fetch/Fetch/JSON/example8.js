/* 
JSON.parse() => this method used to convert JSON to javascript objects
parse function contains following parameters
    - string --> to convert to js object
    - reviver --> function(key, value) if you need to process the key value pairs
*/

var str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

var meeting = JSON.parse(str, function(key, value) {
  if (key == "date") return new Date(value);
  return value;
});

//var meeting = JSON.parse(str);
//console.log(meeting);   //meeting object contains a date property but the value is string not date
console.log(meeting.date.getDate()); // now works!
