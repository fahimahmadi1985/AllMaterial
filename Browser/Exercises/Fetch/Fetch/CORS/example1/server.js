var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    //res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    //res.setHeader("Access-Control-Allow-origin", "http://127.0.0.1:5501");
    res.writeHead(200, { "content-type": "text/html" });

    if (req.url == "/data") {
      console.log("url: " + req.url);
      res.write(fs.readFileSync("data.txt"));
    }
    res.end();
  })
  .listen(8080);
