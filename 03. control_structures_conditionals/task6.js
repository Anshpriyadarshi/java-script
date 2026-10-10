// F] Ternary Operator Questions
// Write a ternary operator to check whether a given number is divisible by 7. If yes, return "Divisible by 7", otherwise "Not Divisible by 7".

// Using ternary operator, check if the temperature is greater than or equal to 30. Return "Hot Day" or "Pleasant Day".

// Write a ternary expression that checks if a string is empty. Return "Empty String" if it is empty, otherwise "String has content".

// Using nested ternary, check a person’s age and return:

// "Child" (age < 13)
// "Teenager" (13–19)
// "Adult" (20 and above)
// Write a nested ternary to find the greater of three numbers (a, b, c) without using Math.max.

// Create a nested ternary that classifies a student’s marks as:

// "Distinction" (≥ 75)
// "First Class" (60–74)
// "Second Class" (50–59)
// "Pass" (35–49)
// "Fail" (< 35)
// Write a single nested ternary expression that returns one of the following based on a number:
// "Positive Even", "Positive Odd", "Negative Even", "Negative Odd", or "Zero".

// Using only nested ternary operators, implement the full leap year logic
// (divisible by 4 and (not divisible by 100 or divisible by 400)) and return "Leap Year" or "Not a Leap Year".

// Convert the following decision tree into one single nested ternary expression:

// if (role === "admin") {
//   if (action === "delete") → "Admin Delete"
//   else if (action === "edit") → "Admin Edit"
//   else → "Admin Other"
// } else if (role === "user") {
//   if (action === "view") → "User View"
//   else → "User Restricted"
// } else {
//   → "Invalid Role"
// }
// Write a complex nested ternary that calculates discount and final amount based on these rules:

// Cart total ≥ 5000 → 20% discount
// Cart total ≥ 2000 → 10% discount
// Cart total ≥ 1000 → 5% discount
// Otherwise → 0% discount
// Return both the discount percentage and the final payable amount in a single expression (you may return an object or a formatted string).

// F) Ternary Operator – 10 Questions


// 01) Check whether a number is divisible by 7
// let num1 = 21;

// let result1 = (num1 % 7 === 0)
//     ? "Divisible by 7"
//     : "Not Divisible by 7";

// console.log(result1);


// // 02) Check temperature
// let temperature = 35;

// let result2 = (temperature >= 30)
//     ? "Hot Day"
//     : "Pleasant Day";

// console.log(result2);


// // 03) Check if a string is empty
// let text = "";

// let result3 = (text === "")
//     ? "Empty String"
//     : "String has content";

// console.log(result3);


// // 04) Classify person's age using nested ternary
// let age = 17;

// let result4 = (age < 13)
//     ? "Child"
//     : (age <= 19)
//         ? "Teenager"
//         : "Adult";

// console.log(result4);


// // 05) Find greater of three numbers
let a = 25;
let b = 40;
let c = 30;

let greater = (a > b)
    ? ((a > c) ? a : c)
    : ((b > c) ? b : c);

// console.log("Greater Number:", greater);


// // 06) Classify student's marks
let marks = 68;

let result6 = (marks >= 75)
    ? "Distinction"
    : (marks >= 60)
        ? "First Class"
        : (marks >= 50)
            ? "Second Class"
            : (marks >= 35)
                ? "Pass"
                : "Fail";

console.log(result6);


// // 07) Check positive/negative and even/odd
let num7 = -8;

let result7 = (num7 === 0)
    ? "Zero"
    : (num7 > 0)
        ? ((num7 % 2 === 0)
            ? "Positive Even"
            : "Positive Odd")
        : ((num7 % 2 === 0)
            ? "Negative Even"
            : "Negative Odd");

console.log(result7);


// // 08) Check leap year using nested ternary
let year = 2024;

let result8 = (year % 4 === 0)
    ? ((year % 100 !== 0 || year % 400 === 0)
        ? "Leap Year"
        : "Not a Leap Year")
    : "Not a Leap Year";

console.log(result8);


// // 09) Role and action decision tree
let role = "admin";
let action = "delete";

let result9 = (role === "admin")
    ? (action === "delete"
        ? "Admin Delete"
        : action === "edit"
            ? "Admin Edit"
            : "Admin Other")
    : (role === "user")
        ? (action === "view"
            ? "User View"
            : "User Restricted")
        : "Invalid Role";

console.log(result9);


// // 10) Calculate discount and final amount
let cartTotal = 3500;

let discountPercentage = cartTotal >= 5000
    ? 20
    : cartTotal >= 2000
        ? 10
        : cartTotal >= 1000
            ? 5
            : 0;

let result10 = {
    discountPercentage: discountPercentage,
    finalAmount: cartTotal - (cartTotal * discountPercentage / 100)
};

console.log("Discount:", result10.discountPercentage + "%");
console.log("Final Amount: ₹" + result10.finalAmount);