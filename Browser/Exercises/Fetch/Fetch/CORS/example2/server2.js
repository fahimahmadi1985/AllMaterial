var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(fs.readFileSync("index.html"), err => {
      console.log("error: " + err);
    });
  })
  .listen(5050);
