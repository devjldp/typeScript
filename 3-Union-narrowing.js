// ======================= Union and Literals types =============================
// Union when we have two or more types.
// Narrowing when TypeScript infers from your code that a value is of a more specific type than what it was defined, declared, or previously inferred as.
// Union => symbol |
var myVariable2 = 'house';
console.log(myVariable2);
myVariable2 = 5;
console.log(myVariable2);
myVariable2 = 'test word';
myVariable2.toUpperCase();
console.log(myVariable2);
/* Assignment narrowing comes into play when a variable is given an explicit
union type annotation and an initial value too.
TypeScript will understand
that while the variable may later receive a value of any of the union typed
values, it starts off as only the type of its initial value. */
// In the previous example myVariable2 is declared as type number and string, but typescriot knows it's immediately narrowed
// to a string from its initial value.
myVariable2 = 'test word';
if (typeof myVariable2 === 'string') {
    myVariable2 = myVariable2.toUpperCase();
    console.log(myVariable2); // Output: TEST WORD
}
else {
    myVariable2 = myVariable2.toFixed();
    console.log(myVariable2); // Output: 5.00
}
