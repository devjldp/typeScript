// ========================= Type Inference ==========================================

/*
Type inference allows the compiler to automatically determine the type of a variable, function, or expression 
without the programmer having to specify it explicitly. 

This reduces the need for redundant type annotations.

*/

// TypeScript can infer types from initial assignments.

let greeting2 = "Hello"

let a // ??? TypeScript understands it is type any. So ts ignores the type of the variable. We have to avoid this. 
// any disables type checking

a = 5

a = "string"

// Type unknown and its diferrence with any.

/* The `unknown` type is safer than `any`. 
Like `any`, it allows a variable to have any type of value. 
However, unlike `any`, `unknown` requires a type check before you can operate on the value. 
This adds an additional layer of safety, as the TypeScript compiler ensures that you will not perform 
unsafe operations on variables of type `unknown`. */



// Example:

let value: unknown;

value = 5; // number
value = "string"; // string
value = true; // boolean

// Type checking before using the value
if (typeof value === "string") {
    value.toUpperCase(); // This is safe and TypeScript allows it
} else if (typeof value === "number") {
    value.toString();
}

// Without type checking, this will cause a compilation error
// value.toUpperCase(); // Error: Object is of type 'unknown'.



// ========================  Functions ==================================

/*
La inferencia de typsecript tiene un limite, por ejemplo en las funciones le tengo que ayudar que tipo de parametros tenemos.
Es decir si las funciones no tienen ningun contexto entonces
Esto evitara problemas porque al ponerle un parametro de distinto nos mostrara errores.

An example
function greetingFunction({ name, age }) {
    console.log(`Hello ${name} you are ${age} years old!`)
}

greetingFunction({ name: 2, age: "Mario" })

Errores:
    Binding element 'name' implicitly has an 'any' type.
    Binding element 'age' implicitly has an 'any' type. 
    
TypeScript tiene una configuracion en la que evitamos los any implicitos

*/

function greetingFunction({ name, age }: { name: string, age: number }) {
    // object destructuring we extract properties from an object and assign them to variables inside the function.
    console.log(`Hello ${name}, you are ${age} years old!`)
}
greetingFunction({ name: "Mario", age: 5 })

// Different way to do the same

function greetingFunction2(person: { name: string, age: number }) {
    const { name, age } = person
    console.log(`Hello ${name}, you are ${age} years old!`)
}
greetingFunction2({ name: "Mario", age: 5 })


// Imagina que queremos devolver por ejemplo la edad

function greetingFunction3({ name, age }: { name: string, age: number }) {
    // object destructuring we extract properties from an object and assign them to variables inside the function.
    console.log(`Hello ${name}, you are ${age} years old!`)
    return age
}

let userName: string

// userName = greetingFunction3({name: "Mario", age: 8}) => Esto nos da error porque typescript sabe que la funcion nos tiene que devolver un tipo de dato number, nos interfiere el tipo de dato.



/* Using functions as parameters:

We have an arrow function that receives a function as a parameter and this is executed within the function when we pass a parameter.

    const sayHiFromFunction = (fn) => {
        fn('Jose');
    };

Functions are first-class citizens, meaning they can be passed as parameters

    sayHiFromFunction((name) => { // Here we pass the function directly as a parameter
        console.log(`Hi ${name}`);
    });

The above will give us many errors:

    * Parameter 'name' implicitly has an 'any' type.
    * Parameter 'fn' implicitly has an 'any' type.

To resolve this, we need to give it a type
*/

/* 
We could use the type Function but it is very general
        const sayHiFromFunction = (fn: Function) => { fn('Mario'); };
Function would be like using any. 
*/

const sayHiFromFunction = (fn: (name: string) => void) => {
    fn('Jose');
};

sayHiFromFunction((name: string) => { // Here we pass the function directly as a parameter
    console.log(`Hi ${name}`);
});

/* 
To type a function, we do it in the following way:
    parameter types => return type
*/
