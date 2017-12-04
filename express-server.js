var express = require('express');

var app = express();
var port = 1337;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + "/public"));

app.get('/person/:id', function (req, res) {
    res.render('person', {
        id: req.params.id,
        Qstr: req.query.Qstr
    });
});

app.listen(port);


