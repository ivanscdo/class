const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(handleRequest);

server.listen(PORT, () => console.log("Server listening on:", PORT));

function handleRequest(req, res) {
    let path = req.url;

    switch(path) {
        case "/":
            return displayRoot(path, req, res);
        case "/favFood":
            return displayFavFood(path, req, res);
        case "/favMov":
            return displayFavMov(path, req, res);
        case "/favCSS":
            return displayFavCSS(path, req, res);
        default:
            return display404(path, req, res);
    }
}

function displayRoot(url, req, res) {

    fs.readFile(__dirname + "/home.html", function (error, data) {
        res.writeHead(200, {"Content": "text/html"} );
        res.end(data);
    });
}

function displayFavFood(url, req, res) {

    fs.readFile(__dirname + "/favFood.html", function (error, data) {
        res.writeHead(200, {"Content": "text/html"} );
        res.end(data);
    });

}

function displayFavMov(url, req, res) {

    fs.readFile(__dirname + "/favMov.html", function (error, data) {
        res.writeHead(200, {"Content": "text/html"} );
        res.end(data);
    });

}

function displayFavCSS(url, req, res) {

    fs.readFile(__dirname + "/favCSS.html", function (error, data) {
        res.writeHead(200, {"Content": "text/html"} );
        res.end(data);
    });

}

function display404(url, req, res) {
    let myHTML =  `
    <html>
      <body>
        <h1>404 Not Found</h1>
        <p>The page you were looking for: ${url} can not be found</p>
     </body>
    </html>`;

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(myHTML);

}