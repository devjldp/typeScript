// =================== ENUM ===========================

// an enum (short for "enumeration") is a way to define a set of named constants, 
// which can make it easier to manage and use sets of related values. 


/* 
    Syntax:
    By default, enums will initialize the first value to 0 and add 1 to each additional value.
        * We use the keyword enum
            enum enumName {
                const1,
                const2,
                const3
            }
*/

enum myEnum {
    enum1,
    enum2,
    enum3,
    enum4
}

console.log(myEnum.enum1) // Output: 0
console.log(myEnum.enum2) // Output: 1
console.log(myEnum.enum3) // Output: 2
console.log(myEnum.enum4) // Output: 3


console.log(myEnum)
/*
{
  '0': 'enum1',
  '1': 'enum2',
  '2': 'enum3',
  '3': 'enum4',
  enum1: 0,
  enum2: 1,
  enum3: 2,
  enum4: 3
}
*/

// Entonces siguiendo estos indeces podremos llamar un enum de la siguiente forma tambien

console.log(myEnum[1]) // Output enum2
let myConst = myEnum[1]
console.log(myConst) // enum2

// We can intiialise enum with numers and/or string. We can mix both, but it is recommended not to do it.

// Numbers
enum mathConst {
    pi = 3.141592,
    e = 2.718281,
    aureo = 1.618033988
}


console.log(mathConst)
console.log(mathConst.pi) // Output: 3.141592
console.log(mathConst.e) // Output: 2.718281
console.log(mathConst.aureo) // Output: 1.618033988

// strings
enum myStrings {
    dog = "Rex",
    cat = "Mizifuz",
    horse = "Spirit"
}

console.log(myStrings.dog) // Output: Rex
console.log(myStrings.cat) // Output: Mizifuz
console.log(myStrings.horse) // Output: Spirit

// Example

enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

/**
 * Returns the permissions associated with a given user role.
 * 
 * @param role - The role of the user, specified as a `UserRole` enum.
 * @returns An array of strings representing the permissions for the given role.
 */
function getPermissions(role: UserRole) { // "type" of the parameter role must be UserRole
    switch (role) {
        case UserRole.Admin: // If you use a different cse from the enum => Error type " " is not comparable to type "UserRole"
            return ["read", "write", "delete"];
        case UserRole.User:
            return ["read", "write"];
        case UserRole.Guest:
            return ["read"];
        default:
            return [];
    }
}

console.log(getPermissions(UserRole.Admin)); // Output: ["read", "write", "delete"]
console.log(getPermissions(UserRole.Guest)); // Output: ["read"]
