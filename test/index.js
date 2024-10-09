

// Q.1// Grade Calculation: Write a function that takes a numerical score (0-100) as an argument and returns a letter grade (A, B, C, D, or F) based on the standard grading scale.

// function gradeCalcult(a){
//         if (a >= 90) {
//             console.log("A");
//         }
//         else if (a >= 80) {
//             console.log("B");
//         }
//         else if (a >= 70) {
//             console.log("C");
//         }
//         else if (a >= 50) {
//             console.log("D");
//         }
//         else if (a >= 33) {
//             console.log("F");
//         }
//         else if (a >= 0) {
//             console.log("Fail");
//         }

// }

// gradeCalcult(33);


// Q.2// Odd Numbers with while Loop: Use a while loop to print all odd numbers from 1 to 50.

// for (i = 1; i <= 50; i++) {
//     if(i%2!==0){
//         console.log(i);

//     }
// }

// Q.3// Array Methods: What will the following code output?
// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);
// ans => output =[ 2, 4, 6, 8, 10 ]


// Q.4// String Methods: How can you check if a string contains a specific substring? Provide an example using the string "Hello, World!".
// let str="Hello, World!"
// console.log(typeof "Hello, World!");


//Q.5// Objects: How do you add to an existia new property ng object? Provide an example object and show how to add a property called age.
// let obj={
//     name:"faishal",
//     salary:10000,
//     tasks:"IT",
// };
// obj.age=24;
// console.log(obj);


//Q.6// Functions: Write a function called sum that takes two parameters and returns their sum. What will sum(5, 10) return?
// function sum(a,b){
//     let add=a+b;
//     return add;
// }
// let rv=sum(5,10);
// console.log(rv);


//Q.7// this Keyword: Explain how the this keyword behaves in a method of an object. Provide an example using an object that has a method.

// let obj = {
//     name: "faishal",
//     salary: 10000,
//     tasks: "IT",
//     details: function () {
//         console.log(this.name, this.salary, this.tasks);
//     },
// }
// console.log(obj.details());


//Q.8// Function Constructor: How do you create an object using a function constructor? Provide an example of a constructor function called Car that initializes make and model properties.
// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//   }
//   let car1 = new Car("Toyota", "Camry");
// let car2 = new Car("Honda", "Accord");
// console.log(car1.make);  
// console.log(car2.model); 

// --------------doubt----------------------------------------------
// Fibonacci Function: Write a function that returns the nth Fibonacci number. For example, if the input is 5, the output should be 5 (0, 1, 1, 2, 3, 5).
// ---------------------------------------------------------------
  



//Q.9// given an array, the task is to cyclically rotate the array clockwise by one time.
// Examples:
// Input: arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}
// Input: arr[] = {2, 3, 4, 5, 1}
// Output: {1, 2, 3, 4, 5}

// let arr = [1, 2, 3, 4, 5];
// function Rclockwise(arr) {
//     if (arr.length === 0){
//         console.log(arr);
//     } 
//     let lastElement = arr.pop(); 
//     arr.unshift(lastElement);   
//         return arr;
//   }
// let rotatedArray = Rclockwise(arr);
// console.log(rotatedArray); 

// -----------------------doubt  doubt---------------------------
// For a given two-dimensional integer array/list ‘ARR’ of size (N x M), print the ‘ARR’ in a sine wave order, i.e., print the first column top to bottom, next column bottom to top, and so on.
// For eg:-
// The sine wave for the matrix:-
// 1 2
// 3 4
// will be [1, 3, 4, 2].

// ---------------------------------------------------------------------


// Write a JavaScript function that takes a string as input and converts all the lowercase letters to uppercase without using any inbuilt string methods such as toUpperCase() or toLowerCase(). You can assume the input will contain only alphabetical characters.
// Example:
// Input: "hello"
// Output: "HELLO"
// Hint:
// You can use ASCII values to determine the difference between lowercase and uppercase letters. In the ASCII table:
// Lowercase letters ('a' to 'z') range from 97 to 122.
// Uppercase letters ('A' to 'Z') range from 65 to 90.
// You can use this information to convert each lowercase letter to its corresponding uppercase counterpart.