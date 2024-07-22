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

// type never. We will use never with functions that will never return anything, meaning they will never execute the return statement.


function throwError(message: string): never {
    throw new Error(message)
}

//  Functions or code blocks with a return type of never will never successfully complete.

/*
Key Differences between never and void
* Return Type Expectation:
    - never: Function never successfully returns (e.g., it always throws an error or enters an infinite loop).
    - void: Function may complete without returning a value.
* Function Completion:
    - never: Function execution does not complete normally.
    - void: Function execution completes normally but does not return a value.
* Usage Context:
    - never: Used in scenarios where it’s guaranteed that a value will never be returned.
    - void: Used to denote that a function doesn’t return a value (common in functions that perform actions rather than calculations).
* Type Compatibility:
    - never is a subtype of every type and cannot have any value.
    - void is a subtype of undefined and is typically used for functions that do not return anything explicitly.
*/

// Inference of anonymous functions according to the context => type inference.

const avengers = ["Spidey", "Hulk", "Iron man"]

// TypeScript knows that we are using the forEach method with an array of strings, 
// so it knows that the parameter avenger is a string.

avengers.forEach(avenger => {
    console.log(avenger.toUpperCase())
})


//============================  Objects  =============================================

let hero = {
    name: 'thor',
    age: 1500
}

/* With objects, there is data inference. That is, when we create the object, TypeScript identifies the data types of the properties.

If we try to change the value of the property, we will get an error:
    hero.age = 'ten' => Error: Type 'string' is not assignable to type 'number'

If we try to create a new property:
    hero.power = 100 => Property 'power' does not exist on type '{name: string; age: number}'.
    TypeScript does not allow us to create new properties.
*/

function createHero(name: string, age: number) {
    return { name, age }
}

const thor = createHero('Thor', 1500)

// But is this hero I created with the function the same type as the previous hero?

// Type Alias
/*
We are going to create our own type in which we will define what a hero is like.
Types are written in PascalCase.
*/

type Hero = {
    name: string
    age: number
}

let hero1: Hero = {
    name: "Thor",
    age: 1500
}

function createHero1(name: string, age: number): Hero {
    return { name, age }
}

// We can specify that we pass a hero of type Hero and that it returns a Hero. Inside the function, we destructure
// the object to get the name and age, and we return it.

function createHero2(hero: Hero): Hero {
    const { name, age } = hero
    return { name, age }
}


/*
    If we do the following, it gives us an error because we are adding a new property to our type, and it is not allowed.

            function createHero3(hero: Hero): Hero {
                const { name, age } = hero;
                return { name, age, isActive: true };
            }

    In this function, we would have the following error: Object literal may only specify known properties, and 'isActive' does not exist in type 'Hero'.

    To solve this problem, we need optional properties.
*/

// Optional properties

// For example, if we want to know if our heroes are active, we put a question mark in our type.

type Hero1 = {
    id?: string
    name: string
    age: number
    isActive?: boolean
}


function createHero3(hero: Hero1): Hero1 {
    const { name, age } = hero
    return { name, age, isActive: true }
}


const thor2 = createHero3({ name: 'Thor', age: 1500 })


thor2.id?.toString() // The question mark indicates that the property is conditional; if the id property exists, then the method is applied.

// Mutability

// Now let's imagine that we don't want to overwrite a property, and that this property should be read-only. Then, we add the keyword readonly before the key of our property.

type Hero2 = {
    readonly id?: number
    name: string
    age: number
    isActive?: boolean
}

function createHero4(hero: Hero2): Hero2 {
    const { name, age } = hero
    return { id: 23, name, age, isActive: true }
}


const thor3 = createHero4({ name: 'Thor', age: 1500 })

console.log(thor3.id)
// thor3.id = 756 => Error: Cannot assign to 'id' it is a read-only property.