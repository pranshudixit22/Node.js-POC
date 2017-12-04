var rect = require("./rectangle");

function solveRect(l ,b){
    console.log("The perimeter is " + rect.perimeter(l, b));
    console.log("The area is " + rect.area(l, b));
}

solveRect(10, 20);
solveRect(30, 60);


