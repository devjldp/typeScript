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

// Tuples

/* 
    It is a typed array with a predefined length and types for each index.

    Key points:
    ---------------------
        * Tuples have a fixed number of elements
        * Each element in a tuple has a specified type.
        * Elements are stored in a specific order and can't be reordered.

    Syntax:
    For two elements 
    let tupleName: [dataType1, dataType2] = [element1, element2]

*/
let person: [string, number, boolean] = ["Jose", 25, true]
console.log(person)
console.log(person[1])
// person[1] = 'Oviedo'  => Error: Cannot assign type 'string' to type 'number'


/*
although TypeScript does not allow modifying the length of the tuple or performing operations that can change its structure 
(like push in arrays), in this case, TypeScript does not produce a compilation error. 

This is due to a peculiarity of TypeScript where it allows additional operations after initialization, 
although the length or type of the tuple should not be modified in a production scenario.
*/

person.push(43)
console.log(person)

// Maps
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

/* 
The Map object holds key-value pairs and remembers the original insertion order of the keys.

Syntax:

    * Creating a map.
        let mapName: Map<dataTypeKey, datatypeValue> = new Map([[key1, value1],[key2, value2]])

    * Adding a new element. We use the set method
        mapName.set(Key, value)

    * Access to value. We use the get method
        mapName.get(key)
        
    * Check a key. returns true or false
        mapName.has(key)

    * Remove an element. We usse the delete method
        mapName.delete(key)
    
    * Get the size of a map. We use the property size
        mapName.size
*/

let myMap: Map<string, number> = new Map([["Jose", 24], ["Maria", 23]])
console.log(myMap) // Output: Map(2) { 'Jose' => 24, 'Maria' => 23 }

console.log(myMap.size) // Output: 2

myMap.set("Juan", 28)
console.log(myMap) // Output: Map(3) { 'Jose' => 24, 'Maria' => 23, 'Juan' => 28 }

console.log(myMap.get('Maria')) // Output: 23
console.log(myMap.has('Mari0')) // Output: false

myMap.delete("Maria")
console.log(myMap) // Output: Map(3) { 'Jose' => 24, 'Juan' => 28 }