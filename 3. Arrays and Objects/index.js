/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

console.log(numbers[0]);
console.log(numbers[4]);
console.log(numbers[14]);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

const Min = Math.min(...numbers);
const Max = Math.max(...numbers);
let sum = 0;

numbers.forEach(function(number) {
    sum += number;
});

let ave = sum/numbers.length;

console.log(Min);
console.log(ave);
console.log(Max);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: list in python can hold values with different data types at the same time, while JavaScript arrays are generally used to hold values with similar data types.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

let it114l = {
    courseCode: "it114l",
    name: "Intro to Prog",
    units: 3,
    numOfStud: 45
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

let prof = {
    profName: "Job",
    surname: "Lipat"
}
console.log(prof["profName"]);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

let courses = [
    { courseCode: "cs107", name: "information management", units: 2,},
    { courseCode: "cs107l", name: "information management lab", units: 1,},
    { courseCode: "hum039", name: "ethics", units: 3,},
    { courseCode: "it114", name: "web sys and techs", units: 2,},
    { courseCode: "it114l", name: "web sys and techs lab", units: 1,},
    { courseCode: "it132", name: "logic design and switching theory", units: 2,},
    { courseCode: "it132l", name: "logic design and switching theory lab", units: 1,},
    { courseCode: "it133", name: "techno", units: 3,},
];

console.log(courses[2].name);

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

let sumUnits = 0;
courses.forEach(function(course){
    sumUnits += course.units;
});

console.log(sumUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: The equivalent of objects in python would be instances of class.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

const newNum = [5];
let combi = [...numbers,...newNum];
console.log(combi);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

const extr = {courseCode, units, ...rest} = it114l;
console.log(courseCode);
console.log(units);