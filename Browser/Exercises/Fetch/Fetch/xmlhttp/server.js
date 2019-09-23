var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-origin", "http://127.0.0.1:5501");
    res.writeHead(200, { "content-type": "text/html" });
    var body = "";
    if (req.url == "/user/add") {
      req.on("data", data => {
        console.log("data: " + data);
        var sentence = `FirstName: ${data.fname} LastName: ${data.lname}\n`;
        fs.appendFileSync("data.txt", body, err => {
          console.log(err);
        });
      });
    }
    res.end();
  })
  .listen(8080);
