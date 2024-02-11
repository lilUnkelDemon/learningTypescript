function sum(num1 : number, num2 : number, flag : boolean) {
    if (!flag){
        console.log('Are daei')
    }
    return num1+num2
}

// How to create variable :

let  varNumber : number = 10 // Number Type
let  varString : string = 'test' // String Type
let varBoolean : boolean = false // Boolean Type
const varObj = { name:"ahmad" } // Object Type



console.log(varObj)
const s = sum(1.11,2.25, true)
console.log(s)