var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    if (req.url == "/info") {
      res.write(fs.readFileSync("index2.html"));
    }
    res.end();
  })
  .listen(5050);
