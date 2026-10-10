// / A] if Statement
//01] Write a program to check if a number is divisible by 5. If yes, print “Divisible by 5”.

// 02]Check if a person’s age is greater than or equal to 60. If true, print “Senior Citizen”.

// 03]Write a program that checks if a given number is greater than 100. If yes, print “Big Number”.

// 04]Check if the temperature is less than 10. If true, print “Very Cold”.

// 05]Write a program to check if a student scored full marks (100). If yes, print “Perfect Score”.

// 06]Check if a number is negative. If it is, print “Negative Number”.

// 07]Write a program that checks if a user has entered an empty string. If the string is empty, print “No input provided”.

// 08]  Check if a given year is divisible by 100. If yes, print “Century Year”.

// 09]Write a program to check if a number is both positive and even using a single if condition. If true, print “Positive Even Number”.

// 10]Check if the value of a variable marks is greater than or equal to 35 and less than or equal to 100. If true, print “Valid Marks”.
// 01) Check if a number is divisible by 5
let num1 = 25;

if (num1 % 5 === 0) {
    console.log("Divisible by 5");
}


// 02) Check if age is greater than or equal to 60
let age = 65;

if (age >= 60) {
    console.log("Senior Citizen");
}


// 03) Check if a number is greater than 100
let num3 = 150;

if (num3 > 100) {
    console.log("Big Number");
}


// 04) Check if temperature is less than 10
let temperature = 5;

if (temperature < 10) {
    console.log("Very Cold");
}


// 05) Check if student scored full marks
let marks1 = 100;

if (marks1 === 100) {
    console.log("Perfect Score");
}


// 06) Check if a number is negative
let num6 = -10;

if (num6 < 0) {
    console.log("Negative Number");
}


// 07) Check if a string is empty
let input = "";

if (input === "") {
    console.log("No input provided");
}


// 08) Check if a year is divisible by 100
let year = 2000;

if (year % 100 === 0) {
    console.log("Century Year");
}


// 09) Check if a number is positive and even
let num9 = 24;

if (num9 > 0 && num9 % 2 === 0) {
    console.log("Positive Even Number");
}


// 10) Check if marks are between 35 and 100
let marks = 75;

if (marks >= 35 && marks <= 100) {
    console.log("Valid Marks");
}