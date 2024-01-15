/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing
console.log(randomNumber);

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50){
    console.log("more than fifty")
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 === 0){
    console.log("Even")
}
else{
    console.log("Odd")
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

if (randomNumber % 3 == 0 && randomNumber % 5 == 0){
    console.log("fizzbuzz")
}
else if (randomNumber % 3 == 0){
    console.log("fizz")
}
else if (randomNumber % 5 == 0){
    console.log("buzz")
}


// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here

let toDisplay = (randomNumber % 2) ? "odd" : "even"
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: using switch statement is efficient and helpful when the outcomes are all equal and does not need any conditions, switch statement provides equality to the developer

// TODO 2.5 Use a for loop to print the numbers 1 to N
let n = 10;
for (let i = 0; i < n; i++){
    console.log(i+1)
}

// TODO 2.6 Use a while loop to display all the values in the list
// Your code here

const list = ["apple", "banana", "cherry", "date", "elderberry"];

let j = 0;
while (j < list.length){
    console.log(list[j]);
    j++;
}

// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Answer: The great way to simulate a do-while loop is by using it as a validation loop for forms that ask for the user's inputs.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here

for (let fruit of list){
    console.log(fruit)
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here

for (let fruit in list){
    console.log(fruit)
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here

list.forEach(function(fruit){
    console.log(fruit);
});

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: for of in printing the values, for in in printing the values' properties (e.g. values' indices) and lastly foreach for printing the values in more concise way.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random(0) * 100) + 1);
const denominator = Math.floor((Math.random(5) * 5)); // feel free to mock this value for testing

try{
    const quotient = numerator / denominator;
    console.log(quotient);
} catch (error) {
    console.error("An error occure: " + "Division by Zero Error!");
} finally {
    console.log("cleaning up resources");
}