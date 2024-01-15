/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squared = numbers.map(num => num * num);
console.log(squared);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here

const evens = numbers.filter(num => num % 2 == 0);
console.log(evens);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here

const total = numbers.reduce(function (sum, num){
    return sum + num;
},0);

console.log(total);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world', 'hehe'];
// Your code here

const upper = words.map(letter => letter.toUpperCase());
console.log(upper);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here

const filtered = words.filter(word => word.length === 4);
console.log(filtered);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here

const phrase = words.reduce(function(sentence, word){
    return sentence + ' ' + word;
},'');

console.log(phrase);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: map is used to create a new set of array from an existing array by adding it's own set of functions that modifies the existing arrays and its values.
//filter came from the word itself, it filterize the array values based on a given condition.
//reduce is like an iteration that sums up all currentValue and add them to the accumulator, in simple words, it converts all values into a single value.