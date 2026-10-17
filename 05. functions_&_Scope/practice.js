// // functions in js = block of code to do specific task.
// // ~Reusability

// // example ~ prints code multiple time easily
// function printHello(){
//     console.log("Hello");
// }
// printHello()
// printHello()
// printHello()
// printHello()

// // Question:~ Create a function for greeting a codinggita Student 

// function greet(name){
//     return "Welcome to Guruku " + name;
// };
// console.log(greet("Shivam"))


// //to print the name 
// function greet(name){
//     return "welcome to codinggita "+ name;
// };
// console.log(greet("Ayush"));

// // print name
// function fullName(first , last){
//     return first+" "+last;
// };
// console.log(fullName("Ansh","Priyadarshi"));

// // for even , odd
// function isEven(num){
//     if(num%2==0){
//         return true
//     }else{
//         return false
//     }
// };
// console.log(isEven(8))

// // Question 1
// function main(){
//     function helper(){
//         return "helper function called";
//     };
//     let res=helper();
//     return res
// };
// console.log(main());

// // Question 2
// function calculateDimentions(r){
//     function findArea(r){
//         let area =(22/7)*r*r
//         return area
//     };
//     function findParameter(r){
//         let perameter = 2*(22/7)*r
//         return perameter 
//     };
//     let area = findArea(r);
//     let perameter = findParameter(r);
//     return `the circle has an area = ${area} & a perameter = ${perameter}`
// };
// console.log(calculateDimentions(3))

// Scope in js => Defines where we can access a variable.
// 1. Global scope ~ in which variables and functions are accessible throughout the entire codebase.
// 2. Function scope ~ declared inside a function are not accessible from outside.

// // globalk Scope example 
// let name = "ansh";

// function myFunc(){
//     console.log(name);
// }
// myFunc();
// console.log(name);

// // function scope examole

// function myFunc(){
//     let name = "ansh";
//     console.log(name);
// }
// myFunc();
// console.log(name);

// block scope => variables inside any curly braces {} that are not belonging to functions are in block scope 

// if (true){
//     let name = "ansh"; // block scope
//     console.log(name)
// }
// console.log(name)

// // Example
// function outer(){
//     function inner(){

//     }
//     inner();
// };
// outer();






