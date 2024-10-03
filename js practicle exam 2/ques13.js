// Original array
let fruits = ["apple", "mango", "grapes", "Pinapple", "pear"];

// array with splice method
let removedfruits = fruits.splice(0, 2);

console.log("Array with splice()", fruits);
console.log("Removed fruits array", removedfruits)

// array with slice method

let slicedfruits = fruits.slice(1,4);

console.log("New aray is created by slice(): ", slicedfruits)
