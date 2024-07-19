// ================================== Objects ===========================================

// TypeScript adds static types to the objects, which helps in catching errors during development.

/*
    Syntax:
        * Definin an object. The same as JavaSctipt
            
            let objectName = {
                key1: value1,
                key2: value2,
                key3: value3
            }
        
        * Typing objects:

            let objectName: {key1: dataType1, key2: dataType2, key3: dataType3} = {
                key1: value1,
                key2: value2,
                key3: value3
            }
        
        * Optional properties: Optional properties are properties that don't have to be defined in the object definition.
             let objectName: {key1: dataType1, key2: dataType2, key3?: dataType3} = {
                key1: value1,
                key2: value2
            }


*/


let employee: { name: string, age: number, city: string, isSingle?: boolean } = {
    name: "Mario",
    age: 25,
    city: "Madrid"
}

console.table(employee)
// employee.isSingle = 'Yes' Error: type "Yes" is not assignable to type 'boolean | undefined'
employee.isSingle = true
console.table(employee)
