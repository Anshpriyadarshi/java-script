// Assignment: JS Functions
// 1. Conceptual Understanding
// What is a function in JavaScript? List any four advantages of using functions in a program.

// 2. Function Declaration
// Write a function declaration named greetStudent that takes one parameter name and returns the string:
// "Hello [name], welcome to CodingGita!"
// Call the function with two different names and display the output.

// 3. Hoisting
// Explain what is meant by hoisting in the context of function declarations.
// Write a code example that shows a function declaration being called before it is defined, and explain why it works.

// 4. Function Expression
// Convert the following function declaration into a function expression and store it in a variable named calculateAverage:

// function calculateAverage(a, b, c) {
//     return (a + b + c) / 3;
// }
// Then call the function with the values 80, 90 and 70 and print the result.

// 5. Parameters vs Arguments
// Differentiate between parameters and arguments with the help of a suitable example.
// Identify the parameters and arguments in the following code:

// function multiply(x, y) {
//     return x * y;
// }
// console.log(multiply(12, 5));
// 6. Return Statement
// Write a function named isEven that takes one number as input and returns true if the number is even, otherwise returns false.
// Test the function with the numbers 24 and 17.

// 7. Multiple Parameters
// Create a function declaration named findPercentage that accepts two parameters: obtainedMarks and totalMarks.
// The function should return the percentage.
// Call the function with the values 456 and 500 and display the result.

// 8. Function Without Return
// What value does a function return if it does not contain a return statement?
// Write a short program that demonstrates this behaviour.

// 9. Practical Application
// Write a function expression named calculateSimpleInterest that takes three parameters: principal, rate and time.
// The function should calculate and return simple interest using the formula:
// SI = (principal × rate × time) / 100
// Call the function with principal = 10000, rate = 5 and time = 2 and print the result.

// 10. Mixed Concept Question
// a) State one major difference between a function declaration and a function expression.
// b) Write a function (either declaration or expression) that takes a student’s name and marks as parameters and returns a message in this format:
// "Student [name] has scored [marks] marks."
// Call the function with any two different students.


// 1. Conceptual Understanding
// A function in JavaScript is a reusable block of code designed to perform a specific task.

// Four advantages of using functions:

// Code reusability: Write code once and use it multiple times.

// Modularity: Divide a large program into smaller parts.

// Readability: Make code easier to understand.

// Easy debugging: Find and fix errors more easily.

// 2. Function Declaration
// javascript
function greetStudent(name) {
    return "Hello " + name + ", welcome to CodingGita!";
}

console.log(greetStudent("Rahul"));
console.log(greetStudent("Priya"));
greet();
// 3. Hoisting
// Hoisting is a JavaScript behavior in which function declarations can be called before they appear in the code.


function greet() {
    console.log("Hello, welcome to JavaScript!");
}
// Output:

// text
// Hello, welcome to JavaScript!

// Explanation: Function declarations are available before their position in the code during execution, so calling greet() before its definition works.
// 4. Function Expression

const calculateAverage = function(a, b, c) {
    return (a + b + c) / 3;
};

console.log(calculateAverage(80, 90, 70));
// Output:

// text
// 80
// 5. Parameters vs Arguments
// Parameters: Variables listed in a function definition.

// Arguments: Actual values passed when calling a function.

javascript
function multiply(x, y) {
    return x * y;
}

console.log(multiply(12, 5));
// Output:

// text
// 60
// Parameters: x, y

// Arguments: 12, 5

// 6. Return Statement

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(24));
console.log(isEven(17));
// Output:

// text
// true
// false
// 7. Multiple Parameters

function findPercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

console.log(findPercentage(456, 500));
// Output:

// text
// 91.2
// 8. Function Without Return
// A function that does not contain a return statement returns undefined by default.


function greet() {
    console.log("Hello, Student!");
}

let result = greet();

console.log(result);
// Output:

// text
// Hello, Student!
// undefined

// 9. Practical Application — Simple Interest

const calculateSimpleInterest = function(principal, rate, time) {
    return (principal * rate * time) / 100;
};

console.log(calculateSimpleInterest(10000, 5, 2));
// Output:

// text
// 1000
// 10. Mixed Concept Question
// a) Difference between function declaration and function expression
// Function declaration: Can be called before its definition because it is hoisted.

// Function expression: When assigned to a variable using const or let, it cannot be called before the assignment is executed.

// b) Student name and marks
// javascript
function studentResult(name, marks) {
    return "Student " + name + " has scored " + marks + " marks.";
}

console.log(studentResult("Amit", 85));
console.log(studentResult("Sneha", 92));
// Output:

// text
// Student Amit has scored 85 marks.
// Student Sneha has scored 92 marks.