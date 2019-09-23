var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    //res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    //res.setHeader("Access-Control-Allow-origin", "http://127.0.0.1:5501");
    res.setHeader("Access-Control-Allow-origin", "*");
    res.writeHead(200, { "content-type": "text/html" });

    if (req.url == "/data") {
      console.log("done");
      console.log(fs.readFileSync("data.txt").toString());
    }
    res.end();
  })
  .listen(8080);
