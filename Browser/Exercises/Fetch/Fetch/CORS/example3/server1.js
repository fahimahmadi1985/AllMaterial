//res.setHeader("Access-Control-Allow-Headers", "Content-Type");
var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-origin", "http://localhost:8080");
    res.writeHead(200, { "Content-Type": "json/application" });

    if (req.url == "/info") {
      res.write(fs.readFileSync("data.txt").toString());
    }
    res.end();
  })
  .listen(8080);
