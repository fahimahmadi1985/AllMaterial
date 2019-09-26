//res.setHeader("Access-Control-Allow-Headers", "Content-Type");
var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-origin", "http://localhost:5050");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.writeHead(200, { "Content-Type": "json/application" });

    if (req.url == "/info") {
      res.write(fs.readFileSync("data.txt").toString());
    }
    res.end();
  })
  .listen(8080);
