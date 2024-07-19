// ==================================== Aliases ============================================================


/* Type Aliases allow defining types with a custom name (an Alias).

    Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

    Syntax:
        * We use the keyword type.
            type AliasName = existingType
*/

type PersonName = string
type PersonAge = number
type PersonCity = string
type PersonStatus = boolean

let fullName: PersonName = "Marta"
console.log(fullName)

// let fullName: PersonName = 8 => Error: Type "number" is not assignable to type "string"

// Now we can define a new type object using the alias

type User = {
    fullName: PersonName,
    age: PersonAge,
    city: PersonCity,
    isSingle: PersonStatus
}

let user: User = {
    fullName: "Mario",
    age: 34,
    city: "Madrid",
    isSingle: true
}


// ==============================  Union and intersection ===================================================

// Union
type DNI = string | number

// Now we can use both data types.

let myDni: DNI = '121243432'
myDni = 121243432


// Intersection types: we can combine multiple types into one:

type Name = {
    fullName: string
}

type Age = {
    age: number
}


type Employee = Name & Age & {
    isEmployee: boolean
}


let employee2: Employee = {
    fullName: 'Juan',
    age: 28,
    isEmployee: false
}

console.table(employee2)

// ==============================  Advance alias  ===============================================

// We can use type aliases to define function types

// This defines a type alias Greet for a function that takes an argument name of type string and returns a string.

type Greet = (name: string) => string

// This defines a constant greet that has the type Greet. 
// The anonymous function assigned to greet accepts an argument name of type string and returns a greeting as a string. This matches perfectly with the defined type Greet.

const greet: Greet = (name: string) => {
    return `Hello, ${name}!`;
};








