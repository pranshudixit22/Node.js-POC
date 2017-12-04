var express = require('express');
var app = express();
var port = 3000;

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var jsonParser = bodyParser.json();

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/person', urlencodedParser, function (req, res) {
    res.send("Thanks");
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.post('/newPerson', jsonParser, function (req, res) {
    res.send("Thanks for JSON Data");
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.listen(port);



