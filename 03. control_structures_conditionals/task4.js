// D] Nested if Statement
// 01] Check if a number is greater than 10.
// If yes, then check whether it is divisible by 3 and print the appropriate message.

// 02] Write a program that first checks if a person is 18 or older.
// If yes, then check if they have a voter ID. Print “Can Vote” only if both conditions are true.

// 03] Check if a student has scored 40 or more marks.
// If yes, then check if the score is 80 or above and print “Passed with Distinction”.

// 04] Create a simple ATM system:
// First check if the PIN is correct.
// If PIN is correct, then check if the account balance is sufficient for withdrawal.

// 05] Write a program that checks if a year is divisible by 4.
// If yes, then further check if it is divisible by 100.
// If it is divisible by 100, then check if it is also divisible by 400 to confirm it is a leap year.

// 06] Check if a user has entered a valid email (contains “@”).
// If yes, then check if the email ends with “.com”.
// If both are true, then check if the length of the email is greater than 10 characters and print “Valid Email”.

// 07] Write a program for online shopping:
// First check if the cart total is ₹1000 or more.
// If yes, then check if the user is a premium member.
// If the user is premium, give 20% discount, otherwise give 10% discount.
// Finally print the final amount after discount.

// 08] Check if a number is positive.
// If yes, then check whether it is even.
// If it is even, then further check if it is divisible by 4 and print “Positive Even and Divisible by 4”.

// 09] Create a job eligibility checker with multiple conditions:
// First check if age is between 21 and 30.
// If age is valid, then check if the candidate has a graduation degree.
// If the degree is present, then check if the candidate has at least 2 years of experience.
// Print “Eligible for Interview” only if all three conditions are true.

// 10] Write a nested program for exam eligibility:
// First check if the student is present.
// If present, then check if internal marks are ≥ 30.
// If internal marks are valid, then check if external marks are ≥ 35.
// Print “Eligible for Final Exam” only when all conditions are satisfied.
// D) Nested if Statement


// 01) Check if number is greater than 10
let num1 = 15;

if (num1 > 10) {
    if (num1 % 3 === 0) {
        console.log("Greater than 10 and Divisible by 3");
    } else {
        console.log("Greater than 10 but Not Divisible by 3");
    }
} else {
    console.log("Number is not greater than 10");
}


// 02) Check age and voter ID
let age = 20;
let voterID = true;

if (age >= 18) {
    if (voterID === true) {
        console.log("Can Vote");
    } else {
        console.log("Voter ID Required");
    }
} else {
    console.log("Not Eligible to Vote");
}


// 03) Check marks and distinction
let marks = 85;

if (marks >= 40) {
    if (marks >= 80) {
        console.log("Passed with Distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}


// 04) Simple ATM system
let pin = 1234;
let enteredPin = 1234;
let balance = 10000;
let withdrawal = 5000;

if (enteredPin === pin) {
    if (withdrawal <= balance) {
        balance = balance - withdrawal;
        console.log("Withdrawal Successful");
        console.log("Remaining Balance: ₹" + balance);
    } else {
        console.log("Insufficient Balance");
    }
} else {
    console.log("Incorrect PIN");
}


// 05) Check leap year using nested if
let year = 2024;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}


// 06) Check valid email
let email = "student@example.com";

if (email.includes("@")) {
    if (email.endsWith(".com")) {
        if (email.length > 10) {
            console.log("Valid Email");
        } else {
            console.log("Email length is too short");
        }
    } else {
        console.log("Email must end with .com");
    }
} else {
    console.log("Invalid Email");
}


// 07) Online shopping discount
let cartTotal = 2000;
let premiumMember = true;
let discount;
let finalAmount;

if (cartTotal >= 1000) {
    if (premiumMember === true) {
        discount = cartTotal * 0.20;
        finalAmount = cartTotal - discount;
        console.log("20% Premium Discount Applied");
    } else {
        discount = cartTotal * 0.10;
        finalAmount = cartTotal - discount;
        console.log("10% Discount Applied");
    }

    console.log("Final Amount: ₹" + finalAmount);
} else {
    finalAmount = cartTotal;
    console.log("No Discount");
    console.log("Final Amount: ₹" + finalAmount);
}


// 08) Check positive, even and divisible by 4
let num8 = 20;

if (num8 > 0) {
    if (num8 % 2 === 0) {
        if (num8 % 4 === 0) {
            console.log("Positive Even and Divisible by 4");
        } else {
            console.log("Positive Even but Not Divisible by 4");
        }
    } else {
        console.log("Positive Odd");
    }
} else {
    console.log("Number is not Positive");
}


// 09) Job eligibility checker
let candidateAge = 25;
let hasDegree = true;
let experience = 3;

if (candidateAge >= 21 && candidateAge <= 30) {
    if (hasDegree === true) {
        if (experience >= 2) {
            console.log("Eligible for Interview");
        } else {
            console.log("Not Eligible: Minimum 2 years experience required");
        }
    } else {
        console.log("Not Eligible: Graduation degree required");
    }
} else {
    console.log("Not Eligible: Age must be between 21 and 30");
}


// 10) Exam eligibility
let present = true;
let internalMarks = 35;
let externalMarks = 40;

if (present === true) {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        } else {
            console.log("Not Eligible: External marks are less than 35");
        }
    } else {
        console.log("Not Eligible: Internal marks are less than 30");
    }
} else {
    console.log("Not Eligible: Student is absent");
}