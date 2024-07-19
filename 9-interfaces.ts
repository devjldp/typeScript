// ======================================== INTERFACES =========================================================

// An interfcae in TypeScript is a syntatctical contract that defines the expected structure of an object.
// It provides a way to describe the shape of objects, including their properties and methods, without implementing any functionality. 

/*
    Syntax:

        interface InterfaceName {
            property1: dataType1;
            property2: dataType2;
            // Additional properties and methods can be defined here
        }

    Parts:
        * interface: Keyword used to define an interface.
        * InterfaceName: Name of the interface following TypeScript naming conventions.
        * property1, property2: Properties of the interface.
        * dataType: TypeScript type annotation defining the type of each property.
*/

interface Person { // A difference with type is we separate the properties and methods using ;
    fullName: string;
    age: number;
    birthday(): number; // : number nos indica el tipo de retorno.
}

let person3: Person = {
    fullName: 'Juan',
    age: 23,
    birthday() {
        // return this.age++ => First returns this.age and then the age is incremented.
        return ++this.age // First age is incremented and the it is returned.
    }
}


console.table(person3)
person3.birthday()
console.table(person3)
console.log(person3) // Output: { fullName: 'Juan', age: 24, birthday: [Function: birthday] }


/*
If we define the object with an extra property, for example, city, when we run the script it will work.
However, for TypeScript, we will have an error because we haven't included this new property in our interface.

    let person3: Person = {
        fullName: 'Juan',
        age: 23,
        city: "Madrid" => esto funcionara sin embargo tendra un error
        birthday() {
            // return this.age++ => First returns this.age and then the age is incremented.
            return ++this.age // First age is incremented and the it is returned.
        }
    }

To solve the error, we should add the city property with its data type to the interface.

    interface Person {
        fullName: string;
        age: number;
        city: string
        birthday(): number; // : number nos indica el tipo de retorno.
    }

*/


// ========================= Extending an interface =============================================================

// Interfaces can extend other interfaces, enabling composition and reuse of interface definitions.
// We are going to extend the previous interface Person

interface EmployeeId extends Person {
    employeeId: number;
    department: string;
}

let employee1: EmployeeId = {
    fullName: 'Juan Perez',
    age: 30,
    employeeId: 12345,
    department: 'Engineering',
    birthday() {
        return ++this.age;
    }
};

console.log(employee1.fullName);    // Output: Juan Perez
console.log(employee1.age);         // Output: 30
console.log(employee1.employeeId);  // Output: 12345
console.log(employee1.department);  // Output: Engineering

console.log(employee1.birthday());  // Output: 31
console.log(employee1.age);         // Output: 31