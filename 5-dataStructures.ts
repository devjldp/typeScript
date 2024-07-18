// ======================= Arrays ============================

/* Syntax:
we can define an array in two ways:

    * Using []:
        let arrayName: dataType[] = [elements]
 
    * Using the "Array" generic type:
        let arrayName: Array<dataType> = [elements]

*/

// Using []

let myArray: number[] = [4, 4, 5]
console.log(`This is the array 1: [${myArray}]`)

// Using Array
let myArray2: Array<number> = [4, 4, 5]
console.log(`This is the array 2: [${myArray2}]`)

// let myArray: Array<number> = ['Hello',4,5] => 
// This is wrong because we have created an array of only numbers and we are adding an element of type string.




// Defining an Array with union types

// method 1
let myArray3: (string | number)[] = [2, "hello", 3, 4, "dog"]
console.log(`This is the array 3: [${myArray3}]`)

// method 2
let myArray4: Array<number | string> = [4, 4, 5, "cat"]
console.log(`This is the array 4: [${myArray4}]`)
