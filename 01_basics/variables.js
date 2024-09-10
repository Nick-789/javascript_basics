"use strict";

//var
var x=10;
function varExample() {
 
    if (true) {
        var x = 20;  // re-declared in the same scope (function scope)
        console.log(x);  // Output: 20
    }
    x=90;
    console.log(x);  // Output: 20 (value changed globally within the function)
}
varExample();
console.log(x);
//let
let y = 10;
function letExample() {
   
    if (true) {
        let y = 20;  // y is block-scoped, only available within this block
        console.log(y);  // Output: 20
    }
    y=60;
    console.log(y);  // Output: 60  (outside the block, the original y remains unchanged)
}
letExample();
console.log(y);
