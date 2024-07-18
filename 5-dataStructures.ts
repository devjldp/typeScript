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



// ========================  Sets  =======================================================
// Documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection.

/* Syntax

    * Creating a new set. We use the Set constructor.
        let mySet = new Set()

        let mySet: Set<number> = new Set();
    
    * Add a new element: We use the add method
        mySet.add(element)

    * Remove an element: We use the delete method
        mySet.delete(element)
    
    * Check and element: We use the has method. Output is true or false
        mySet.has(element)

    * remove all elements from a Set: We use the clear method.
        myset.clear()

*/


let mySet: Set<number> = new Set([2, 3, 4, 6])
console.log(mySet)
console.log(mySet.has(5))
console.log(mySet.has(2))

// The values introduced in the set should be contained in an array.
let mySet2: Set<number> = new Set([2, 4, 6, 2, 3, 8, 9])

// When we create the set, we introduce the number 2 twice, however, since it is a set, the values must be unique.
console.log(mySet2) // Output: Set(6) { 2, 4, 6, 3, 8, 9 } 

let mySet3: Set<number | string> = new Set([2, 3, "dog", 4, "cat"])
console.log(mySet3) // output: Set(5) { 2, 3, 'dog', 4, 'cat' }
mySet3.delete("cat")
console.log(mySet3) // output: Set(4) { 2, 3, 'dog', 4 }

