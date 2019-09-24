var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    if (req.url == "/info") {
      res.write(fs.readFileSync("index3.html"));
    }
    res.end();
  })
  .listen(6060);
