// //? <---------------function--------------->
// //! Named / Regular Function
// function myFunction() { 
//     console.log("Hello World");
// }
// myFunction()

// //! Function with Parameters
// function addTwoNum(a, b) { 
//     console.log("a =", a);
//     console.log("b =", b);
//     console.log("a + b =", a + b);
// }
// addTwoNum(8, 6)

// //! Function without named
// const multiTwoNum = function (a, b) { 
//     console.log("a * b =", a * b);
// }
// multiTwoNum(8, 6)

// //!Function with return value 
// function  subTwoNum(a, b) { 
//     return a - b;
// }
// console.log("a - b = ", subTwoNum(8, 6));

// //! Immediately Invoked Function Expressions (IIFE)

// (function myName(){
//     //? named IIFE
//     console.log(`Baljeet`);
// })();

// ( (name) => {
//     console.log(`Hello Mr. ${name}`);
// } )('Baljeet')

// //! Arrow Function ---------->


// const addTwoNumber = (num1, num2) => {
//     console.log(num1 + num2);   
// }
// addTwoNumber(78, 56)


// //! map
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = myNums.map((num) => 
//     num + 10
// );
// console.log(newNum);


// //! use fillter
// const newNums = myNums.filter((num) => 
//     num > 5
// );
// console.log(newNums);


// //! use reduce method 
// const myArr = [10, 15, 20, 25, 30];
// const totalArr = myArr.reduce((currVal, currInd) => {
//     return currVal + currInd
// })
// console.log(totalArr);

// //? ----------------use forEach method------------------->
// //! using functon
// const myArray = ["JS", "HTML", "CSS"];
// myArray.forEach(function (item, index, arr) {
//     console.log(item, index, arr);
// });

// //! using arrow functon
// const language = ["JS", "HTML", "CSS"];
// language.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

