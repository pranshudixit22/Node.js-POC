var fs = require('fs');

var greet1 = fs.readFileSync(__dirname + "/greet.txt" , "utf8");
console.log(greet1); // synchronous

console.log("123");
var greet2 = fs.readFile(__dirname + "/greet.txt", function(error, data){
    console.log(data); // asynchronous
});

console.log("456");
var greet3 = fs.readFile(__dirname + "/greet.txt", "utf8", function(error,data){
    console.log(data); // aynchronous read
});

console.log("789");

var readable = fs.createReadStream(__dirname + "/greet.txt", {encoding: "utf8"});
// readable.on("data", function(chunk){
//     console.log(chunk.length);
//     console.log(chunk);
// })

var writable = fs.createWriteStream(__dirname + "/greetclone.txt");
// readable.on("data", function(chunk){
//     console.log(chunk.length);
//     console.log(chunk);
//     writable.write(chunk);
// })
readable.pipe(writable);

var moment = require("moment");
console.log(moment().format("ddd,hA"));
console.log(moment().format("llll"));