//! ========Function=============== 

// function sayMyName() {
//     console.log("B");
//     console.log("A");
//     console.log("L");
//     console.log("J");
//     console.log("E");
//     console.log("E");
//     console.log("T");    
// }

// sayMyName();

// function addTowNumbers(number1, number2) {
//     console.log(number1 + number2 );
// }
// const result = addTowNumbers(3, 5)
// console.log("result: ", result);

//!------------------------------------------------
// function addTowNumbers(number1, number2) {
    // let result = number1 + number2 
    // return result
//     return number1 + number2
// }

// const result = addTowNumbers(3, 5)
// console.log("result: ", result);

//!------------------------------------------------------
// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Baljeet"));
// console.log(loginUserMessage());

//!-----------------------------------------------------
// function loginUserMessage(username) {
//     if(username === undefined) {
//         console.log("Please enter a Username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Baljeet"));

//!-----------------------------------------------------
// function loginUserMessage(username = "vikas") {
//     if(!username) {
//         console.log("Please enter a Username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Baljeet"));

// function calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 600, 250, 420))

//! ==================Object===============================

// const user = {
//     username: "baljeet",
//     price: 199
// }
// function handleObject(anyobject) {
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// handleObject(user)
// handleObject({
//     username: "vikas",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray) {
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray));

// console.log(returnSecondValue([200, 400, 500, 1000]));