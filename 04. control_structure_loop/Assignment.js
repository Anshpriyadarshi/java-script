// //Task 1
// // Assignment : Loops in JavaScript
// // Part I] - For Loop


// //01] Given an array of temperatures [28, 32, 25, 40, 18, 35], use a for loop to count how many days were hotter than 30°C.
// // 02] Write a for loop that calculates the sum of all digits of a given number (example: 4729 → 4+7+2+9 = 22).
// // 03] Create a for loop that prints only the numbers between 1 and 100 that are divisible by both 3 and 5, but not by 7.
// // 04] Given the string "JavaScript", use a for loop to create a new string that contains only the consonants (remove vowels).
// // 05] Write a for loop that finds the second-largest number in an array of positive integers without using any sorting method.
// // 06] Use a for loop to check whether a given number is a perfect number (a number equal to the sum of its proper divisors). Example: 28.
// // 07]   Print the following series using a single for loop:
// // 1 2 4 8 16 32 64 128
// // 08] Write a for loop that prints the first 20 Fibonacci numbers (starting with 0 and 1).
// // 09] Given an array of student scores [45, 78, 90, 32, 56, 88], use a for loop to calculate the average and also count how many students scored above the average.
// // 10] Write a for loop that converts a decimal number to its binary representation (without using built-in methods like toString(2)).

// //--------- Q1-----------//

// let temperatures = [28, 32, 25, 40, 18, 35];
// let countHotDays = 0;
// for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] > 30) {
//         countHotDays++;
//     }
// }
// console.log("Number of hot days:", countHotDays);

// //---------- Q2---------//
// let number = 4729;
// let sumOfDigits = 0;
// for (let i = 0; i < number.toString().length; i++) {
//     sumOfDigits += parseInt(number.toString()[i]);
// }
// console.log("Sum of digits:", sumOfDigits);

// // -------Q3---------//
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
//         console.log(i);
//     }
// }
// // --------Q4---------//
// let str = "JavaScript";
// let consonants = "";
// for (let i = 0; i < str.length; i++) {
//     if (!"aeiouAEIOU".includes(str[i])) {
//         consonants += str[i];
//     }
// }
// console.log("Consonants:", consonants);

// // --------Q5---------//
// let numbers = [12, 45, 67, 23, 89, 34];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         secondLargest = largest;
//         largest = numbers[i];
//     } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
//         secondLargest = numbers[i];
//     }
// }
// console.log("Second-largest number:", secondLargest);
// // --------Q6---------//
// let num = 28;
// let sumOfDivisors = 0;
// for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//         sumOfDivisors += i;
//     }
// }
// console.log("Sum of divisors:", sumOfDivisors);
// if (sumOfDivisors === num) {
//     console.log(num, "is a perfect number.");
// } else {
//     console.log(num, "is not a perfect number.");
// }
// // --------Q7---------//
// let series = "";
// for (let i = 0; i < 8; i++) {
//     series += Math.pow(2, i) + " ";
// }
// console.log("Series:", series);
// // --------Q8---------//
// let fib = [0, 1];
// for (let i = 2; i < 20; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
// }
// console.log("First 20 Fibonacci numbers:", fib);
// // --------Q9---------//
// let scores = [45, 78, 90, 32, 56, 88];
// let totalScore = 0;
// for (let i = 0; i < scores.length; i++) {
//     totalScore += scores[i];
// }
// let averageScore = totalScore / scores.length;
// let countAboveAverage = 0;
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > averageScore) {
//         countAboveAverage++;
//     }
// }
// console.log("Average score:", averageScore);
// console.log("Number of students above average:", countAboveAverage);
// // --------Q10---------//
// let decimalNumber = 42;
// let binaryRepresentation = "";
// for (let i = 0; i < 8; i++) {
//     binaryRepresentation = (decimalNumber % 2) + binaryRepresentation;
//     decimalNumber = Math.floor(decimalNumber / 2);
// }
// console.log("Binary representation:", binaryRepresentation);


// // Task 2
// // B]break inside a for Loop
// // 01] Write a for loop that searches for the first occurrence of the number 7 in an array. As soon as it finds 7, print its index and stop the loop using break.
// // 02] Simulate a simple password checker: keep asking the user for a password (using a for loop that runs maximum 5 times). If the correct password is entered, print “Access granted” and break. If all 5 attempts fail, print “Account locked”.
// // 03] Write a for loop that adds numbers from 1 onwards until the sum exceeds 100. Print the last number that was added before the sum crossed 100 and stop using break.
// // 04] Given an array of names, use a for loop to find the first name that starts with the letter “S”. Print that name and immediately stop the loop with break.
// // 05] Create a for loop that prints numbers from 1 to 50. Stop completely (break) as soon as you encounter a number that is both a perfect square and greater than 20.

// // --------- Q1-----------//
// let arr = [1, 3, 5, 7, 9, 11];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 7) {
//         console.log("Found 7 at index:", i);
//         break;
//     }
// }
// // -------- Q2-----------//
// let correctPassword = "password123";
// for (let attempts = 0; attempts < 5; attempts++) {
//     let userInput = prompt("Enter password:");
//     if (userInput === correctPassword) {
//         console.log("Access granted");
//         break;
//     }
//     if (attempts === 4) {
//         console.log("Account locked");
//     }
// }
// // -------- Q3-----------//
// let sum = 0;
// for (let i = 1; ; i++) {
//     sum += i;
//     if (sum > 100) {
//         console.log("Last number added before exceeding 100:", i - 1);
//         break;
//     }
// }
// // -------- Q4-----------//
// let names = ["Alice", "Bob", "Sam", "Charlie", "Steve"];
// for (let i = 0; i < names.length; i++) {
//     if (names[i].startsWith("S")) {
//         console.log("First name starting with S:", names[i]);
//         break;
//     }
// }
// // -------- Q5-----------//
// for (let i = 1; i <= 50; i++) {
//     if (Math.sqrt(i) % 1 === 0 && i > 20) {
//         console.log("Encountered perfect square greater than 20:", i);
//         break;
//     }
//     console.log(i);
// }

// //Task 3
// // C]continue inside a for Loop:-


// // 01] Print all numbers from 1 to 30, but skip every number that is divisible by 4 using continue.
// // 02] Given an array of mixed positive and negative numbers, use a for loop with continue to calculate the sum of only the positive numbers.
// // 03] Write a for loop that prints every character of the string "Hello World", but skips all spaces using continue.
// // 04] Print the multiplication table of 6 from 1 to 12, but skip the rows where the product is divisible by 5 (use continue).
// // 05] Given an array of ages [12, 18, 25, 15, 30, 17, 22], use a for loop with continue to print only the ages of people who are eligible to vote (age ≥ 18).
// // // --------- Q1-----------//
// for (let i = 1; i <= 30; i++) {
//     if (i % 4 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// // -------- Q2-----------//
// let mixedNumbers = [-5, 10, -3, 7, -1, 8];
// let positiveSum = 0;
// for (let i = 0; i < mixedNumbers.length; i++) {
//     if (mixedNumbers[i] < 0) {
//         continue;
//     }
//     positiveSum += mixedNumbers[i];
// }
// console.log("Sum of positive numbers:", positiveSum);
// // -------- Q3-----------//
// let helloStr = "Hello World";
// for (let i = 0; i < helloStr.length; i++) {
//     if (helloStr[i] === " ") {
//         continue;
//     }   
// console.log(helloStr[i]);
// }
// // -------- Q4-----------//
// for (let i = 1; i <= 12; i++) {
//     let product = 6 * i;

//     if (product % 5 === 0) {
//         continue;
//     }
//     console.log(`6 x ${i} = ${product}`);
// }
// // -------- Q5-----------//
// let ages = [12, 18, 25, 15, 30, 17, 22];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] < 18) {
//         continue;
//     }
//     console.log("Eligible to vote:", ages[i]);
// }
// // Task 4
// // Part I-d] Nested For Loop Questions
// // Print the following right-triangle number pattern using nested for loops (without hard-coding any row):
// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// // Print the following right-triangle alphabet pattern using nested for loops (without hard-coding any row):
// // A
// // A B
// // A B C
// // A B C D
// // A B C D E
// // Print this hollow right-triangle star pattern using nested loops:
// // *
// // * *
// // *   *
// // *     *
// // * * * * *
// // Print the following reverse right-angle star pattern using nested for loops:
// // *****
// // ****
// // ***
// // **
// // *
// // Print the following reverse right-angle pattern where each row contains the row number repeated, using nested loops:
// // 5 5 5 5 5
// // 4 4 4 4
// // 3 3 3
// // 2 2
// // 1
// // Print this reverse right-angle number pattern using nested for loops:
// // 1 2 3 4 5
// // 1 2 3 4
// // 1 2 3
// // 1 2
// // 1
// // Print the following reverse right-angle pattern of consecutive numbers using nested loops:
// // 15 14 13 12 11
// // 10  9  8  7
// //  6  5  4
// //  3  2
// //  1
// // Print this reverse right-angle hollow star pattern (only the borders should have stars) using nested for loops:
// // * * * * *
// // *     *
// // *   *
// // * *
// // *
// // Using nested for loops, print a 5×5 square of stars (*) but skip printing a star whenever the row number equals the column number (i.e., leave the main diagonal empty).

// // Write nested for loops that print the multiplication table of numbers from 1 to 5, but only show the products that are even. (Each table should start on a new line.)

// // Given a positive integer n, use nested for loops to print an n × n matrix where each cell contains the absolute difference of its row and column indices (0-based or 1-based — your choice, but be consistent).

// // Using nested for loops, generate and print all unique pairs (i, j) such that 1 ≤ i < j ≤ 10 and i + j is a perfect square. Print each pair on a new line.

// // Print the following diamond number pattern for n = 5 using nested loops (no extra spaces or characters allowed beyond what’s shown):

// //     1
// //    121
// //   12321
// //  1234321
// // 123454321
// //  1234321
// //   12321
// //    121
// //     1
// // Write nested for loops that print a 6×6 matrix filled with consecutive numbers starting from 1, but in spiral order (clockwise, starting from top-left).
// // Example start of the matrix:
// //  1  2  3  4  5  6
// // 20 21 22 23 24  7
// // 19 32 33 34 25  8
// // 18 31 36 35 26  9
// // 17 30 29 28 27 10
// // 16 15 14 13 12 11
// // Using only nested for loops (no arrays or built-in reverse methods), print the Pascal’s Triangle up to 8 rows. Each row should be properly spaced so the triangle looks centered.

// // Given two positive integers rows and cols, use nested for loops to print a matrix where:

// // The border cells contain the value 1
// // All inner cells contain the value 0
// // Additionally, if a cell’s row index + column index is divisible by 3, force the value to 2 (even if it is on the border).


// // Print the following right-triangle number pattern using nested for loops (without hard-coding any row):
// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// // num = 1

// // for i in range(1, 5):
// //     for j in range(1, i + 1):
// //         print(num, end=" ")
// //         num += 1
// //     print()

// // 1. Right-triangle number pattern
// // python
// // num = 1

// // for i in range(1, 5):
// //     for j in range(i):
// //         print(num, end=" ")
// //         num += 1
// //     print()
// // Output:

// // text
// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// // 2. Right-triangle alphabet pattern
// // python
// // for i in range(1, 6):
// //     for j in range(i):
// //         print(chr(65 + j), end=" ")
// //     print()
// // Output:

// // text
// // A
// // A B
// // A B C
// // A B C D
// // A B C D E
// // 3. Hollow right-triangle star pattern
// // python
// // n = 5

// // for i in range(1, n + 1):
// //     for j in range(1, i + 1):
// //         if i == n or j == 1 or j == i:
// //             print("*", end=" ")
// //         else:
// //             print(" ", end=" ")
// //     print()
// // Output:

// // text
// // *
// // * *
// // *   *
// // *     *
// // * * * * *
// // 4. Reverse right-angle star pattern
// // python
// // n = 5

// // for i in range(n, 0, -1):
// //     for j in range(i):
// //         print("*", end="")
// //     print()
// // Output:

// // text
// // *****
// // ****
// // ***
// // **
// // *
// // 5. Reverse right-angle pattern with repeated row numbers
// // python
// // for i in range(5, 0, -1):
// //     for j in range(i):
// //         print(i, end=" ")
// //     print()
// // Output:

// // text
// // 5 5 5 5 5
// // 4 4 4 4
// // 3 3 3
// // 2 2
// // 1
// // 6. Reverse right-angle number pattern
// // python
// // for i in range(5, 0, -1):
// //     for j in range(1, i + 1):
// //         print(j, end=" ")
// //     print()
// // Output:

// // text
// // 1 2 3 4 5
// // 1 2 3 4
// // 1 2 3
// // 1 2
// // 1
// // 7. Reverse right-angle pattern of consecutive numbers
// // python
// // num = 15

// // for i in range(5, 0, -1):
// //     for j in range(i):
// //         print(f"{num:2}", end=" ")
// //         num -= 1
// //     print()
// // Output:

// // text
// // 15 14 13 12 11
// // 10  9  8  7
// //  6  5  4
// //  3  2
// //  1
// // 8. Reverse right-angle hollow star pattern
// // python
// // n = 5

// // for i in range(n, 0, -1):
// //     for j in range(1, i + 1):
// //         if i == n or j == 1 or j == i:
// //             print("*", end=" ")
// //         else:
// //             print(" ", end=" ")
// //     print()
// // Output:

// // text
// // * * * * *
// // *     *
// // *   *
// // * *
// // *
// // 9. 5×5 square with an empty main diagonal
// // python
// // n = 5

// // for i in range(n):
// //     for j in range(n):
// //         if i == j:
// //             print(" ", end=" ")
// //         else:
// //             print("*", end=" ")
// //     print()
// // Output:

// // text
// //   * * * *
// // *   * * *
// // * *   * *
// // * * *   *
// // * * * *  
// // 10. Multiplication tables from 1 to 5, showing only even products
// // python
// // for i in range(1, 6):
// //     for j in range(1, 11):
// //         product = i * j
// //         if product % 2 == 0:
// //             print(f"{i} x {j} = {product}")
// //     print()
// // Each table starts on a new line. Odd products are skipped.

// // 11. Matrix of absolute differences
// // python
// // n = int(input("Enter n: "))

// // for i in range(n):
// //     for j in range(n):
// //         print(abs(i - j), end=" ")
// //     print()
// // Example for n = 4:

// // text
// // 0 1 2 3
// // 1 0 1 2
// // 2 1 0 1
// // 3 2 1 0
// // 12. Unique pairs whose sum is a perfect square
// // python
// // for i in range(1, 11):
// //     for j in range(i + 1, 11):
// //         s = i + j

// //         for k in range(1, s + 1):
// //             if k * k == s:
// //                 print(i, j)
// //                 break
// // Output:

// // text
// // 1 3
// // 2 7
// // 3 6
// // 6 10
// // 7 9
// // 13. Diamond number pattern for n = 5
// // python
// // n = 5

// // for i in range(1, n + 1):
// //     for j in range(n - i):
// //         print(" ", end="")

// //     for j in range(1, i + 1):
// //         print(j, end="")

// //     for j in range(i - 1, 0, -1):
// //         print(j, end="")

// //     print()

// // for i in range(n - 1, 0, -1):
// //     for j in range(n - i):
// //         print(" ", end="")

// //     for j in range(1, i + 1):
// //         print(j, end="")

// //     for j in range(i - 1, 0, -1):
// //         print(j, end="")

// //     print()
// // Output:

// // text
// //     1
// //    121
// //   12321
// //  1234321
// // 123454321
// //  1234321
// //   12321
// //    121
// //     1
// // 14. 6×6 spiral matrix using nested loops
// // python
// // n = 6
// // top = 0
// // bottom = n - 1
// // left = 0
// // right = n - 1
// // num = 1

// // for layer in range((n + 1) // 2):
// //     for j in range(left, right + 1):
// //         print(num, end=" ")
// //         num += 1
// //     print()

// //     for i in range(top + 1, bottom + 1):
// //         print(num, end=" ")
// //         num += 1
// //     print()

// //     for j in range(right - 1, left - 1, -1):
// //         print(num, end=" ")
// //         num += 1
// //     print()

// //     for i in range(bottom - 1, top, -1):
// //         print(num, end=" ")
// //         num += 1
// //     print()

// //     top += 1
// //     bottom -= 1
// //     left += 1
// //     right -= 1
// // Note: The spiral matrix requires storing values by position to produce the requested 6×6 arrangement. The above code prints the spiral traversal sequence in separate lines, not the requested matrix. Here is a correct version using a 2D list and nested loops:

// // python
// // n = 6
// // a = [[0] * n for _ in range(n)]
// // top, bottom = 0, n - 1
// // left, right = 0, n - 1
// // num = 1

// // while top <= bottom and left <= right:
// //     for j in range(left, right + 1):
// //         a[top][j] = num
// //         num += 1
// //     top += 1

// //     for i in range(top, bottom + 1):
// //         a[i][right] = num
// //         num += 1
// //     right -= 1

// //     if top <= bottom:
// //         for j in range(right, left - 1, -1):
// //             a[bottom][j] = num
// //             num += 1
// //         bottom -= 1

// //     if left <= right:
// //         for i in range(bottom, top - 1, -1):
// //             a[i][left] = num
// //             num += 1
// //         left += 1

// // for i in range(n):
// //     for j in range(n):
// //         print(f"{a[i][j]:2}", end=" ")
// //     print()
// // Output:

// // text
// //  1  2  3  4  5  6
// // 20 21 22 23 24  7
// // 19 32 33 34 25  8
// // 18 31 36 35 26  9
// // 17 30 29 28 27 10
// // 16 15 14 13 12 11
// // 15. Pascal's Triangle up to 8 rows
// // python
// // n = 8

// // for i in range(n):
// //     for j in range(n - i - 1):
// //         print(" ", end=" ")

// //     value = 1

// //     for j in range(i + 1):
// //         print(f"{value:4}", end="")
// //         value = value * (i - j) // (j + 1)

// //     print()
// // Output (centered approximately):

// // text
// //               1
// //             1   1
// //           1   2   1
// //         1   3   3   1
// //       1   4   6   4   1
// //     1   5  10  10   5   1
// //   1   6  15  20  15   6   1
// // 1   7  21  35  35  21   7   1
// // 16. Matrix with border values, inner values, and divisibility rule
// // Rules:

// // Border cells contain 1.

// // Inner cells contain 0.

// // If the sum of the row and column indices is divisible by 3, the value becomes 2, overriding the other rules.

// // python
// // rows = int(input("Enter rows: "))
// // cols = int(input("Enter columns: "))

// // for i in range(rows):
// //     for j in range(cols):
// //         if (i + j) % 3 == 0:
// //             print(2, end=" ")
// //         elif i == 0 or i == rows - 1 or j == 0 or j == cols - 1:
// //             print(1, end=" ")
// //         else:
// //             print(0, end=" ")
// //     print()
// // Example for rows = 4 and cols = 5:

// // text
// // 2 1 1 2 1
// // 1 0 2 0 2
// // 1 2 0 0 1
// // 2 1 1 2 1

// // Task 5
// // Part II: While Loop
// // Q1. Print Numbers
// // Write a while loop to print numbers from 1 to 10.

// // Q2. Sum of Natural Numbers
// // Write a while loop to calculate the sum of the first 10 natural numbers.

// // Q3. Multiplication Table
// // Write a while loop to print the multiplication table of a given number from 1 to 10.

// // Example: Input: 5

// // Output: 5 x 1 = 5 5 x 2 = 10 ... 5 x 10 = 50

// // Q4. Count the Digits
// // Write a while loop to count the total number of digits in a given positive integer.

// // Example: Input: 58372 Output: 5

// // Q5. Reverse a Number
// // Write a while loop to reverse the digits of a given positive integer.

// // Example: Input: 12345 Output: 54321

// // Q6. Sum of Digits
// // Write a while loop to calculate the sum of all digits of a given number.

// // Example: Input: 4729 Output: 22

// // Q7. Print Numbers with Conditions
// // Write a while loop to print all numbers between 1 and 100 that are divisible by both 3 and 5 but not by 7.

// // Q8. Calculate Factorial
// // Write a while loop to calculate the factorial of a given non-negative integer.

// // Example: Input: 5 Output: 120

// // Q9. Check a Palindrome Number
// // Write a while loop to check whether a given number is a palindrome without converting it into a string.

// // Example: Input: 121 Output: Palindrome number

// // Q10. Convert Decimal to Binary
// // Write a while loop to convert a positive decimal integer into its binary representation without using built-in methods such as toString(2).

// // Example: Input: 13 Output: 1101

// // Part III: Do-While Loop
// // Q1. Print Numbers in Reverse
// // Write a do-while loop to print numbers from 10 down to 1.

// // Q2. Print Even Numbers
// // Write a do-while loop to print all even numbers between 1 and 20.

// // Q3. Sum of Natural Numbers
// // Write a do-while loop to calculate the sum of the first n natural numbers.

// // Example: Input: 5 Output: 15

// // Q4. Product of Digits
// // Write a do-while loop to calculate the product of all digits of a given positive integer.

// // Example: Input: 234 Output: 24

// // Q5. Find the First Digit
// // Write a do-while loop to find the leftmost digit of a given positive integer.

// // Example: Input: 58372 Output: 5

// // Q6. Calculate a Power
// // Write a do-while loop to calculate the power of a number without using Math.pow() or the exponentiation operator **.

// // Example: Input: Base = 3, Exponent = 4 Output: 81

// // Q7. Print Multiples with Conditions
// // Write a do-while loop to print all numbers between 1 and 100 that are divisible by 4 but not by 8.

// // Q8. Check a Palindrome Number
// // Write a do-while loop to check whether a given positive integer is a palindrome without converting it into a string.

// // Example: Input: 1221 Output: Palindrome number

// // Q9. Find the Greatest Common Divisor (GCD)
// // Write a do-while loop to find the greatest common divisor of two positive integers using the Euclidean algorithm.

// // Example: Input: 48, 18 Output: 6

// // Q10. Convert Decimal to Binary
// // Write a do-while loop to convert a non-negative decimal integer into binary without using built-in conversion methods.

// // Example: Input: 13 Output: 1101

// // Challenge: Handle the input 0 correctly as well.

// // Q1. Print Numbers (1 to 10)

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// // Q2. Sum of Natural Numbers

// let p = 1;
// let sum = 0;

// while (p <= 10) {
//     sum += i;
//     i++;
// }

// console.log("Sum =", sum);
// // Output: Sum = 55
// // Q3. Multiplication Table

// let n = 5;
// let q = 1;

// while (q <= 10) {
//     console.log(n + " x " + i + " = " + (n * i));
//     i++;
// }

// // Q4. Count the Digits
// // javascript
// let d = 58372;
// let count = 0;

// while (d> 0) {
//     count++;
//     n = Math.floor(n / 10);
// }

// console.log(count);
// // Output: 5
// // Q5. Reverse a Number
// // javascript
// let k = 12345;
// let reverse = 0;

// while (k > 0) {
//     let digit = n % 10;
//     reverse = reverse * 10 + digit;
//     n = Math.floor(n / 10);
// }

// console.log(reverse);
// // Output: 54321

// // Q6. Sum of Digits
// // javascript
// let j = 4729;
// let addition = 0;

// while (j > 0) {
//     let digit = j % 10;
//     addition += digit;
//     j = Math.floor(j/ 10);
// }

// console.log(sum);
// // Output: 22

// // Q7. Numbers Divisible by 3 and 5 but Not by 7
// // javascript
// let a = 1;

// while (a<= 100) {
//     if (a % 3 === 0 && a% 5 === 0 && a % 7 !== 0) {
//         console.log(a);
//     }
//     i++;
// }
// // Output: 15, 30, 45, 60, 90
// // Q8. Calculate Factorial
// // javascript
// let r = 5;
// let factorial = 1;
// let w = 1;

// while (r <= n) {
//     factorial *= w;
//     r++;
// }

// console.log(factorial);
// // Output: 120

// // Q8. Calculate Factorial
// javascript
// let l = 5;
// let fac = 1;
// let t = 1;

// while (i <= n) {
//     factorial *= l;
//     t++;
// }

// console.log(factorial);
// // Output: 120

// // Q9. Check a Palindrome Number
// // javascript
// let s= 121;
// let original = n;
// let retur = 0;

// while (n > 0) {
//     let digit = n % 10;
//     reverse = reverse * 10 + digit;
//     n = Math.floor(n / 10);
// }

// if (original === reverse) {
//     console.log("Palindrome number");
// } else {
//     console.log("Not a palindrome number");
// }

// // Q10. Convert Decimal to Binary
// // javascript
// let e = 13;
// let binary = "";

// while (e > 0) {
//     let remainder = e % 2;
//     binary = remainder + binary;
//     e= Math.floor(n / 2);
// }
// console.log(binary);

// // Task 6
// // Part III: Do-While Loop
// // Q1. Print Numbers in Reverse (10 to 1)
// // javascript
// let t= 10;

// do {
//     console.log(t);
//     i--;
// } while (i >= 1);
// // Q2. Print Even Numbers (1 to 20)
// // javascript
// let s= 2;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 20);
// // Q3. Sum of First n Natural Numbers
// // javascript
// let h= 5;
// let p= 1;
// let sum = 0;

// do {
//     sum += i;
//     i++;
// } while (i <= n);

// console.log(sum);
// // Output: 15

// // Q4. Product of Digits
// // javascript
// let v = 234;
// let product = 1;

// do {
//     let digit = n % 10;
//     product *= digit;
//     n = Math.floor(n / 10);
// } while (n > 0);

// console.log(product);
// // Output: 24

// // Q5. Find the First Digit
// // javascript
// let z= 58372;

// do {
//     if (n < 10) {
//         break;
//     }
//     n = Math.floor(n / 10);
// } while (n > 0);

// console.log(n);
// // Output: 5

// // Q6. Calculate a Power
// // javascript
// let base = 3;
// let exponent = 4;
// let result = 1;
// let q= 0;

// do {
//     if (i >= exponent) {
//         break;
//     }

//     result *= base;
//     i++;
// } while (true);

// console.log(result);
// // Output: 81

// // This handles exponent 0 as well, returning 1. The break exits the loop when the required number of multiplications is complete.

// // Q7. Multiples of 4 but Not 8
// // javascript
// let i = 1;

// do {
//     if (i % 4 === 0 && i % 8 !== 0) {
//         console.log(year);
//     }
//     i++;
// } while (i <= 100);
// // Output: 4, 12, 20, 28, 36, 44, 52, 60, 68, 76, 84, 92, 100

// // Q8. Check a Palindrome Number
// // javascript
// let f= 1221;
// let original = n;
// let reverse = 0;

// do {
//     let digit = n % 10;
//     reverse = reverse * 10 + digit;
//     n = Math.floor(n / 10);
// } while (n > 0);

// if (original === reverse) {
//     console.log("Palindrome number");
// } else {
//     console.log("Not a palindrome number");
// }
// // Output: Palindrome number

// // Q9. Find the Greatest Common Divisor (GCD)
// // Using the Euclidean algorithm:

// javascript
// let a = 48;
// let b = 18;
// let remainder;

// do {
//     remainder = a % b;
//     a = b;
//     b = remainder;
// } while (b !== 0);

// console.log("GCD =", a);
// // Output: GCD = 6

// // Q10. Convert Decimal to Binary (including 0)
// // javascript
// let n = 13;
// let binary = "";

// do {
//     binary = (n % 2) + binary;
//     n = Math.floor(n / 2);
// } while (n > 0);

// console.log(binary);
// // Output for 13: 1101

// // Output for 0: 0