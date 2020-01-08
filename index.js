var http = require("http");
var fs = require("fs");
var PORT = 8080;

var server = http.createServer(function (request, response) {
    console.log(request.url);
    console.log(request.method);
    response.end(`
    <html>
    <body>
    <script>console.log("hello")</script>
    <h1>answers.input</h1>
    </body>
    <html>`)
})

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT)
});