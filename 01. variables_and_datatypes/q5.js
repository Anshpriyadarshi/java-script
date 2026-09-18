// part A 
let student = {
    name: "Ansh",
    age: 17,
    isEnrolled: true
};

console.log("Student:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);

// part B 
let numbers = [1, 2, 3, 4, 5];

let mixed = [1, "hello", true, null];

console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);
console.log("Mixed array:", mixed);

// part c 
function greet(name) {
    return "Hello, " + name + "!";
}

let message1 = greet("Ansh");
let message2 = greet("Rahul");

console.log("Message 1:", message1);
console.log("Message 2:", message2);