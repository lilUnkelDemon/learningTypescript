"use strict";
function sum(num1, num2, flag) {
    if (!flag) {
        console.log('Are daei');
    }
    return num1 + num2;
}
// How to create variable :
let varNumber = 10; // Number Type
let varString = 'test'; // String Type
let varBoolean = false; // Boolean Type
const varObj = { name: "ahmad" }; // Object Type
console.log(varObj);
const s = sum(1.11, 2.25, true);
console.log(s);
