// ==============================   Functions   ============================================================

// ============================= Parameters =========================================================
// ========================================================================================
// In typescript, we define the type of parameters that our functions accept.

function addTwo(number1: number, number2: number) {
    return number1 + number2
}

// cconsole.log(addTwo(6)) // This shows us an error that we need one more argument.
// console.log(addTwo(3, "hello")) // This shows us an error that the type string is not accepted as an argument for this function.

console.log(addTwo(4, 6))

// Using optional parameters:

function suma(number1: number, number2: number, number3?: number) {
    // 'number1' and 'number2' are required parameters of type number,
    // 'number3' is an optional parameter of type number, indicated by the '?' after the parameter name.
    if (number3) {
        return number1 + number2 + number3
    }
    return number1 + number2
}

console.log(suma(2, 4, 8))

// Using default parameters
function add4(number1: number, number2: number, number3: number = 7, number4?: number) {
    if (number4) {
        return number1 + number2 + number3 + number4
    }
    return number1 + number2 + number3
}

console.log(add4(2, 3, 5)) // we don't include the optional parameter
console.log(add4(2, 3)) // by default number3 = 7
console.log(add4(2, 3, undefined)) // by default number3 = undefined, we use default value

// Rest parameters => spread operator.

// ===================================== return types ======================================================
//==========================================================================================================

// We can define the type of data that we are going to return.

function suma2(number1: number, number2: number, number3?: number): number {
    if (number3) {
        return number1 + number2 + number3
    }
    return number1 + number2
}


// if we use an arrow function, the syntas is as follows:

const addNumbers = (number1: number, number2: number): number => number1 + number2

console.log(addNumbers(12, 23))


// If we don't return anything, then we use the keyword void.

function greeting(): void {
    console.log("Hello, World")
}

greeting()