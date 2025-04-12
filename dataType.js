//! Primitive Data Type

//! 7 Type : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100;    //number Value
// const scoreValue = 100.3 

// const isLoggedIn = false;  //Boolean
// const outsideTemp = null   // null
 
// let userEmail;  // undefined

// const id = Symbol ('123');
// const anotherId = Symbol(123);   //Symbols 

// console.log(id === anotherId);  //output false
// console.log(typeof anotherId);  //? Output- symbol


// const bigNumber = 44562650959095n   // bigInt


//! Reference (Non primitive)

//! Array, Objects, Functions

// const car = ["Tata", "Mahindra", "Toyota", "Kia"]  //? arrays 

// let myObj = {         //? object
//     name: "Baljeet",
//     age: 25,
// }

//? Function 
// function () {}  // this way to define function

// const Nyfunction = function(params) {
//     console.log("Hello World!")
// }

//---------------------------------------------------

//Stack (Primitive), Heap (Non-Primitive)
//! stack
// let myYoutubename = "baljeetsaini.com";

// let anothername = myYoutubename;
// anothername = "ApanDesign"

// console.log(myYoutubename);
// console.log(anothername);

//!   Heap
// let userOne = {
//     email: "user@google.com",
//     upi: "user@ybl"
// }
// let userTow = userOne

// userTow.email = "baljeet@google.com"

// console.log(userOne.email);
// console.log(userTow.email);
// console.log(userTow);