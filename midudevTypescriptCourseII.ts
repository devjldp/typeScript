// ========================= Functions ==========================================

// How to type an arrow function
// Method 1
const addTwo = (a: number, b: number): number => {
    return a + b
}

// Method 2: First we define the type of the function and after that the function.
const substract: (a: number, b: number) => number = (a, b) => {
    return a - b
}

// type never. Usaremos never con aquellas funciones que nunca van a devolver nada, es decir nunca va a ejecutar el return. 

function throwError(message: string): never {
    throw new Error(message)
}


function logMessage(message: string): void {
    console.log
}

// inferencia funciones anonimas segun el contexto => inferencia de datos

const avengers = ["Spidey", "Hulk", "Iron man"]

// TypoScript sabe que estamos usando el metodo forEach con un array the strings, entonces sabe que el parametro avenger es un string.

avengers.forEach(avenger => {
    console.log(avenger.toUpperCase())
})





