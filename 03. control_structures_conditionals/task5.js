// E] switch Statement – 10 Questions
// Write a program that takes a month number (1–12) and prints the number of days in that month using switch
// (Hint: Consider 28/29 for February as 28 for simplicity).

// Write a program that checks a character and prints whether it is a vowel or consonant using switch.

// Create a program that takes a number from 1 to 4 and prints the season using multiple cases together:
// 1 or 2 → Winter
// 3 or 4 → Summer

// Write a program using switch (true) to assign class based on marks:
// ≥ 75 → Distinction
// ≥ 60 → 1st class
// ≥ 50 → 2nd class
// ≥ 35 → 3rd class
// below 35 → Failed

// Create a nested switch program:
// First take a role (“admin” or “user”).
// If role is “admin”, then take an action (“create”, “edit”, “delete”) and print the corresponding message.
// If role is “user”, print “Limited Access”.

// Predict and explain the output of the following code. Then correct it so that only one message is printed:

// let fruit = "mango";

// switch (fruit) {
//   case "apple":
//     console.log("Apple is red");
//   case "mango":
//     console.log("Mango is yellow");
//   case "banana":
//     console.log("Banana is yellow");
//   default:
//     console.log("Unknown fruit");
// }
// Write a program that takes a value which can be either a number or a string (0, "0", false, null, undefined) and uses switch to correctly identify each one. Explain why some values may not match as expected.

// Create a tricky calculator using switch that supports these operations:
// +, -, *, /, %, and also ** (exponentiation).
// Handle division by zero properly inside the corresponding case.

// Write a program using switch that takes a date (day number of the month) and prints:
// “Beginning of the month” (1–10)
// “Middle of the month” (11–20)
// “End of the month” (21–31)
// Use switch (true) technique for range checking.

// Create a multi-level nested switch program for an online food ordering system:
// First select Category: "veg" or "nonveg".
// Then select Item based on category.
// Finally select Size: "half" or "full" and print the final order summary with price.

// E) switch Statement – 10 Questions


// 01) Month number and number of days
let month = 2;

switch (month) {
    case 1:
        console.log("January: 31 days");
        break;

    case 2:
        console.log("February: 28 days");
        break;

    case 3:
        console.log("March: 31 days");
        break;

    case 4:
        console.log("April: 30 days");
        break;

    case 5:
        console.log("May: 31 days");
        break;

    case 6:
        console.log("June: 30 days");
        break;

    case 7:
        console.log("July: 31 days");
        break;

    case 8:
        console.log("August: 31 days");
        break;

    case 9:
        console.log("September: 30 days");
        break;

    case 10:
        console.log("October: 31 days");
        break;

    case 11:
        console.log("November: 30 days");
        break;

    case 12:
        console.log("December: 31 days");
        break;

    default:
        console.log("Invalid Month");
}


// 02) Check vowel or consonant
let character = "a";

switch (character.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");
}


// 03) Multiple cases together for seasons
let seasonNumber = 3;

switch (seasonNumber) {
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
        console.log("Summer");
        break;

    default:
        console.log("Invalid Number");
}


// 04) Assign class based on marks using switch(true)
let marks = 78;

switch (true) {
    case marks >= 75:
        console.log("Distinction");
        break;

    case marks >= 60:
        console.log("1st Class");
        break;

    case marks >= 50:
        console.log("2nd Class");
        break;

    case marks >= 35:
        console.log("3rd Class");
        break;

    default:
        console.log("Failed");
}


// 05) Nested switch for role and action
let role = "admin";
let action = "edit";

switch (role) {
    case "admin":

        switch (action) {
            case "create":
                console.log("Admin can create");
                break;

            case "edit":
                console.log("Admin can edit");
                break;

            case "delete":
                console.log("Admin can delete");
                break;

            default:
                console.log("Invalid Admin Action");
        }

        break;

    case "user":
        console.log("Limited Access");
        break;

    default:
        console.log("Invalid Role");
}


// 06) Predict and correct the fruit switch
let fruit = "mango";

switch (fruit) {
    case "apple":
        console.log("Apple is red");
        break;

    case "mango":
        console.log("Mango is yellow");
        break;

    case "banana":
        console.log("Banana is yellow");
        break;

    default:
        console.log("Unknown fruit");
}

/*
Original code output for fruit = "mango":

Mango is yellow
Banana is yellow
Unknown fruit

Why?
Because there is no 'break' after the mango case.
JavaScript continues executing the next cases.

Correct code is given above with break statements.
*/


// 07) Identify different values using switch
let value = "0";

switch (value) {
    case 0:
        console.log("Number Zero");
        break;

    case "0":
        console.log("String Zero");
        break;

    case false:
        console.log("Boolean False");
        break;

    case null:
        console.log("Null");
        break;

    case undefined:
        console.log("Undefined");
        break;

    default:
        console.log("Unknown Value");
}

/*
Important:
switch uses strict comparison (===).

Therefore:
0 !== "0"
false !== 0
null !== undefined

So each value needs its own case.
*/


// 08) Calculator using switch
let num1 = 10;
let num2 = 3;
let operator = "**";

switch (operator) {
    case "+":
        console.log("Result:", num1 + num2);
        break;

    case "-":
        console.log("Result:", num1 - num2);
        break;

    case "*":
        console.log("Result:", num1 * num2);
        break;

    case "/":
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log("Result:", num1 / num2);
        }
        break;

    case "%":
        console.log("Result:", num1 % num2);
        break;

    case "**":
        console.log("Result:", num1 ** num2);
        break;

    default:
        console.log("Invalid Operator");
}


// 09) Beginning, Middle or End of month
let day = 25;

switch (true) {
    case day >= 1 && day <= 10:
        console.log("Beginning of the month");
        break;

    case day >= 11 && day <= 20:
        console.log("Middle of the month");
        break;

    case day >= 21 && day <= 31:
        console.log("End of the month");
        break;

    default:
        console.log("Invalid Day");
}


// 10) Multi-level nested switch for food ordering
let category = "veg";
let item = "pizza";
let size = "full";

switch (category) {

    case "veg":

        switch (item) {

            case "pizza":

                switch (size) {
                    case "half":
                        console.log("Order: Veg Pizza - Half - ₹150");
                        break;

                    case "full":
                        console.log("Order: Veg Pizza - Full - ₹250");
                        break;

                    default:
                        console.log("Invalid Size");
                }

                break;

            case "burger":

                switch (size) {
                    case "half":
                        console.log("Order: Veg Burger - Half - ₹80");
                        break;

                    case "full":
                        console.log("Order: Veg Burger - Full - ₹120");
                        break;

                    default:
                        console.log("Invalid Size");
                }

                break;

            default:
                console.log("Invalid Veg Item");
        }

        break;


    case "nonveg":

        switch (item) {

            case "pizza":

                switch (size) {
                    case "half":
                        console.log("Order: Non-Veg Pizza - Half - ₹200");
                        break;

                    case "full":
                        console.log("Order: Non-Veg Pizza - Full - ₹350");
                        break;

                    default:
                        console.log("Invalid Size");
                }

                break;

            case "burger":

                switch (size) {
                    case "half":
                        console.log("Order: Non-Veg Burger - Half - ₹120");
                        break;

                    case "full":
                        console.log("Order: Non-Veg Burger - Full - ₹180");
                        break;

                    default:
                        console.log("Invalid Size");
                }

                break;

            default:
                console.log("Invalid Non-Veg Item");
        }

        break;


    default:
        console.log("Invalid Category");
}
