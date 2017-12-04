// var http = require('http');
// var hostName = 'localhost';
// var port = 3000;

// var server = http.createServer(function (req, res) {
//     console.log(req.headers);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end("<html><body><h1>Hello World !!</h1></body></html>");
// });

// server.listen(port, hostName, function(){
//     console.log("Server is running at localhost:"+port+" !!");
// });

/**
 End of 1st code
 */

// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var html = fs.readFileSync(__dirname+'/index.html', 'Utf8');
//     console.log(html)
//     var message = 'Hello World...';
//     html = html.replace('{message}', message);
//     console.log(html)
//     res.end(html);

// }).listen(3000, 'localhost');

/**
 End of 2nd code
 */

// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'application/JSON'});
//     var obj = {
//         firstName: "John",
//         lastName: "Doe"
//     };
//     res.end(JSON.stringify(obj));

// }).listen(3000, 'localhost');

/**
 End of 3rd code
 */

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
   if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
   }
   else if(req.url == "/apis"){
        res.writeHead(200, {'Content-Type': 'application/JSON'});
        var obj = {
            firstName: "John",
            lastName: "Doe"
        };
        res.end(JSON.stringify(obj));
   }
   else{
       console.log("There is an error !!");
   }
    

}).listen(1337, 'localhost');
