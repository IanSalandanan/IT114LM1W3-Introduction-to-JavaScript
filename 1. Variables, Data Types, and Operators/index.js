/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

var item1 = 72
console.log(item1)


// TODO 1.2 Use the let keyword to define a variable.
// Your code here

let item2 = "Hello Mah Fren"
console.log(item2)

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

//it produces error due to const being a constant declaration for a value, it's value cannot be change.

const item3 = 3
// item3 = 4
console.log()

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: const values cannot be altered once declared. let is local and var is global.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const x = 5
let y = 5
y = 6
var z = x + y 
console.log(z)

// Checkpoint 1.2 What operators did you use?
// Answer: The Addition operator
// Your code here
//var z = x + y 

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log("Wassuuup" + " Ako si Kerbyyy!")

// Checkpoint 1.3 What operators did you use?
// Answer: The Addition operator because it can also concatenate string values.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
var a = true && false
var b = true || true
var c = !false
console.log(a)
console.log(b)
console.log(c)

// Checkpoint 1.4 What operators did you use?
// Answer: and, or and not logical operators
//var a = true && false
//var b = true || true
//var c = !false

// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const homies = ["aaron", "cid", "ej", "von", "luis"];
if (2 in homies){
    console.log("Yes homies")
}

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here
console.log([] == false);