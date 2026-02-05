console.log("Primitive Data Types")
/* NULL
Number
String
Symbol
Undefined
Boolean
Bigint
*/
let a = null;
let b = 1234;
let c = "Abdullah";
let d = undefined;
let e = true;
let f = Symbol("I am a symbol");
let g = BigInt("123456789012345678901234567890");
console.log(a, b, c, d, e, f, g);

console.log(typeof a)
console.log(typeof f)


console.log("Objects")
// Object are the collection of key and value pairs
// Non primitive data types are objects
const users= {
    name: "Abdullah",
    age: 20,
    city: "Karachi",
    country: "Pakistan",
    
}
console.log(users)
console.log(users["name"]);
