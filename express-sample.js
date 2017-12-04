var express = require('express');

var app = express();
var port = 1337;

app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<html><body><h1>Hello World !!</h1></body></html>");
});

app.get('/person/:id', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<html><body><h1>Person " + req.params.id + "</h1></body></html>");
});

app.get('/api', function (req, res) {
    res.json({
        firstName: "Johnny"
    })
});

app.listen(port);
