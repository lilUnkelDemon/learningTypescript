function sum(num1: number, num2: number, flag: boolean) {
    if (!flag) {
        console.log('Are daei')
    }
    return num1 + num2
}

const s = sum(1.11, 2.25, true)
console.log(s)

// How to create variable :

let varNumber: number = 10 // Number Type

let multyTypeVar: (number | string) = 'sdfsdfds' // Multy  Type acceptable Variable (string | number)

let varString: string = 'test' // String Type
let varBoolean: boolean = false // Boolean Type
const varObj = {fname: "Ahmad", family: "Hassani"} // Object Type // JS
console.log(varObj.fname)


// Object in Typescript :

const tscObject: {
    name: string,
    age: number
} = {
    name: "Ali",
    age: 324
}


// Array  In Typescript :

let x = ['ali', 234, false] // Multy Type acceptable (string | number | boolean)
let anyArray: any = ['dsfsdfsd', 324, 'dsf', false] // Type Any in typescript


// Episode 7 Tuple Type

let tupleTypeVar: [string, number, boolean] = ['string', 2, false]

tupleTypeVar.push("hassan")

// Episode 8 Any Type
let anyTypeVar

anyTypeVar = 45
anyTypeVar = 'df'


// Episode 9 Enum Type

enum Personal {
    NAME = 'Ali',
    MALE = 0,
    FEMALE = 1

}

const enumTypeObj: {
    name:Personal,
    age:number,
    gender:Personal
} = {
    name:Personal.NAME,
    age:15,
    gender: Personal.MALE
}

console.log(enumTypeObj)



// Episode 10 * Union Type * Literal Type * null Type * undefined Type

const unionType : (string | number) = 12; // Union Type
const literalType : 'ahmad' = 'ahmad' // Literal Type
const nullType : null = null //.null Type
const undefinedType : undefined = undefined // undefined Type
