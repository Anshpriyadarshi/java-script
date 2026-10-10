// B] if...else Statement
// 01] Write a program to check whether a number is even or odd.

// 02] Check if a person is eligible to vote (age ≥ 18). Print “Eligible” or “Not Eligible”.

// 03] Write a program that checks whether a number is positive or negative.

// 04] Check if a student has passed or failed based on marks (pass mark = 35).

// 05] Write a program to check whether a given character is an uppercase letter or not.
// (Hint: Use character comparison)

// 06] Check if a number is divisible by 3 or not. Print appropriate messages.

// 07] Write a program that takes a password as input. If the password is “admin123”, print “Login Successful”, otherwise print “Incorrect Password”.

// 08] Check whether a given year is a leap year or not using the basic rule (divisible by 4).

// 09] Write a program to find the greater of two numbers using if...else.

// 10] Check if a number is positive, negative, or zero using only if...else (you may use nested or multiple conditions carefully).

// Assignment: if...else if...else & Nested if Statements

// B) if...else Statement


// 01) Check whether a number is even or odd
let num1 = 10;

if (num1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 02) Check whether a person is eligible to vote
let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// 03) Check whether a number is positive or negative
let num3 = -5;

if (num3 >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}


// 04) Check whether a student has passed or failed
let marks = 50;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 05) Check whether a character is uppercase
let character = "A";

if (character >= "A" && character <= "Z") {
    console.log("Uppercase Letter");
} else {
    console.log("Not an Uppercase Letter");
}


// 06) Check whether a number is divisible by 3
let num6 = 15;

if (num6 % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not Divisible by 3");
}


// 07) Check password
let password = "admin123";

if (password === "admin123") {
    console.log("Login Successful");
} else {
    console.log("Incorrect Password");
}


// 08) Check whether a year is a leap year
let year = 2024;

if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


// 09) Find the greater of two numbers
let num9a = 25;
let num9b = 40;

if (num9a > num9b) {
    console.log(num9a + " is greater");
} else {
    console.log(num9b + " is greater");
}


// 10) Check whether a number is positive, negative, or zero
let num10 = -10;

if (num10 > 0) {
    console.log("Positive");
} else if (num10 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}