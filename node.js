const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8000;

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    fs.readFile("index.html", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
        return;
      }

      res.write(data);
      res.end();
    });
  } else if (url === "/style.css") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css");

    fs.readFile("style.css", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
        return;
      }

      res.write(data);
      res.end();
    });
  } else if (url === "/MainBackground.png") {
    const imagePath = path.join(__dirname, "MainBackground.png");

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "image/png");
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});