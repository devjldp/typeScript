

//=============================== Typing ========================================================
// Typing: refers to the typing system, which defines how the language handles and enforces types of values.

/* Dynamic Typing: In JavaScript variables can hold any type of value, and their type cna change during execution.
        - Example:

            let value = 42;      // value is a number
            value = "hello";     // now value is a string
            value = true;        // now value is a boolean
*/

//================Primitive data types ==============================

/*
In JavaScript we have the following primitive data types.

    - Number:. Including special values such as Infinity, -Infinity, NaN
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
    - BigInt
*/

// string
let fullName: string = "Jose"
// let fullName: String ="Jose"

// number
let age: number = 13.2

//boolean
let isEmployed: boolean = true

// any means any data type. any is a type that disables type checking and effectively allows all types to be used.

let myVariable: any = 'My variable'
myVariable = 6

// unknown is similar to any, but it is a safer alternative.s
