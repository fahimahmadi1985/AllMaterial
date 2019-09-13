var fs = require("fs");

/* 
Callback hell
As you can see in the following code we can have a callback function when we are using 
async functions. but imagin if you have a lot of nested callback functions.
and if each function contain hundereds of javascript code lines.
then managing this piramid will be really difficult therefore we can use promises to
prevent from this piramid

function(
    callback1(
        callback2(
            callback3(){
            
            })
        {})
    {})
{}

*/
fs.readFile("data.txt", (err, data) => {
  if (err) throw err;
  console.log(`Original data: ${data.toString()}`);
  capitalize(data.toString(), (capitalText, er) => {
    if (er) throw er;
    console.log(`After capitalize: ${capitalText}`);

    countWords(capitalText, (textLength, error) => {
      if (error) throw error;
      console.log(`Text length: ${textLength}`);
      fs.writeFile("writFile.txt", textLength, errorr => {
        if (errorr) throw errorr;
      });
    });
  });
});

function capitalize(text, callback) {
  callback(text.toUpperCase(), false);
}

function countWords(text, callback) {
  callback(text.length, false);
}
