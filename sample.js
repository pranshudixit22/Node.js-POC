console.log("Jhakaas !!");

(function abc(){
    for(var i=0; i<11; i++){
        console.log(i);
    }
})();

// Code goes here

var arr1 = "john".split('');
console.log("arr1 value = " + arr1);
console.log("arr1 length = " + arr1.length);

var arr2 = arr1.reverse();
console.log("arr2 value = " + arr2);
console.log("arr2 length = " + arr2.length);
console.log("arr1 value = " + arr1);
console.log("arr1 length = " + arr1.length);

var arr3 = "jones".split('');
console.log("arr3 value = " + arr3);
console.log("arr3 length = " + arr3.length);

arr2.push(arr3);
console.log("arr2 value = " + arr2);
console.log("arr2 length = " + arr2.length);
console.log("arr1 value = " + arr1);
console.log("arr1 length = " + arr1.length);


console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));