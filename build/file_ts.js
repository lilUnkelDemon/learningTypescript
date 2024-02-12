"use strict";
function sum(num1, num2, flag) {
    if (!flag) {
        console.log('Are daei');
    }
    return num1 + num2;
}
const s = sum(1.11, 2.25, true);
console.log(s);
// How to create variable :
let varNumber = 10; // Number Type
let multyTypeVar = 'sdfsdfds'; // Multy  Type acceptable Variable (string | number)
let varString = 'test'; // String Type
let varBoolean = false; // Boolean Type
const varObj = { fname: "Ahmad", family: "Hassani" }; // Object Type // JS
console.log(varObj.fname);
// Object in Typescript :
const tscObject = {
    name: "Ali",
    age: 324
};
// Array  In Typescript :
let x = ['ali', 234, false]; // Multy Type acceptable (string | number | boolean)
let anyArray = ['dsfsdfsd', 324, 'dsf', false]; // Type Any in typescript
// Episode 7 Tuple Type
let tupleTypeVar = ['string', 2, false];
tupleTypeVar.push("hassan");
// Episode 8 Any Type
let anyTypeVar;
anyTypeVar = 45;
anyTypeVar = 'df';
// Episode 9 Enum Type
var Personal;
(function (Personal) {
    Personal["NAME"] = "Ali";
    Personal[Personal["MALE"] = 0] = "MALE";
    Personal[Personal["FEMALE"] = 1] = "FEMALE";
})(Personal || (Personal = {}));
const enumTypeObj = {
    name: Personal.NAME,
    age: 15,
    gender: Personal.MALE
};
console.log(enumTypeObj);
// Episode 10 * Union Type * Literal Type * null Type * undefined Type
const unionType = 12; // Union Type
const literalType = 'ahmad'; // Literal Type
const nullType = null; //.null Type
const undefinedType = undefined; // undefined Type
