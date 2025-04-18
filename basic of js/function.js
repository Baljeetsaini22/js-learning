// //?========================function & Arrow key in js=========================
// function hello(a, b) {

//     sum = a + b;
    // console.log("a + b =", a + b)
//     console.log("a - b =", a - b)
//     console.log("a * b =", a * b)
//     console.log("a / b =", a / b)
//     console.log("a ** b =", a ** b)

//     return sum    
// }
// let val = hello(8, 2);

// console.log(val);

// //! return the function 
// //? return function declare type 1 
// let x =sum (8, 3)
// console.log(x);
// function sum(a, b) {
//     return a + b;
// }

// //? return function declare type 2
// function val(a, b) {
//     return a * b;
// }
// const result = val(8, 3)
// console.log(result);

// //? return function declare type 3 
// function val(a, b) {
//     return a * b;
// }
// console.log(val(8, 3));

// //!=========================================================
// function loginUser(username) {
//     return `${username} just logged in`
// }

// console.log(loginUser("baljeet"));

////!============================
// function loginUserMsg(userName) {
//     if(userName === undefined) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${userName} just logger in`
// }
// console.log(loginUserMsg("baleet"));
////?---------------------------------------------------------
// function loginUserMsg(userName = "baljeet") {
//     if(!userName) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${userName} just logger in`
// }
// console.log(loginUserMsg("vikas"));

////?----------------------------------------------------
// function calculateCartPrice(val1, val2, ...num1) {
//     return num1;
// }
// console.log(calculateCartPrice(30, 50, 100, 70));


// const user = {
//     userName: "baljeet",
//     price: 299
// }
// function handleObj(anyObj) {
//     console.log(`user is ${anyObj.userName} and price is ${anyObj.price}`);    
// }
// handleObj(user)
////? return object type 
// handleObj({
//     userName: "vikas",
//     price: 199
// })
////?========================================================= 
// const myNewArr = [520, 720, 680, 530]
// function reuternSecVal(getArr) {
//     return getArr[1]
    
// }
// console.log(reuternSecVal(myNewArr));
// console.log(reuternSecVal([254, 125, 425, 785]));

// function one() {
//         const username ="baljeet" 
//         function two() {
//             const website = "youtube"
//             console.log(username)            
        // }  
        // console.log(website);
        // two()
// }
// one()

// if (true) {
//     const username = "baljeet"
//     if (username === "baljeet") {
//         const website = "youtube"
//         console.log(username + website);
        
//     }
    // console.log(website);
    
// }
// console.log(username);

////! =================intersetin===========================
// console.log(addone(5)); 
// function addone (num) {
//     return num + 1
// }


// const addTwo = function (num) {
//     return num + 2
// }
// console.log(addTwo(5));


// //?=======================Arrow function=======================
// const arrowSum = (a, b) => {
//     console.log(a + b);    
// };
// arrowSum(5, 6);

// const arrowMul = (a, b) => {    
//     console.log(a * b);    
// };
// arrowMul(5, 6);

// //! return Arrow function

// const arrowMul = (a, b) => {   
//     return a + b;
// };
// const total = arrowMul(2, "2");
// console.log(total);
// //? return arrow function declare type 2

// console.log(arrowMul(2, 2));

// const addTwo = (a, b) => a + b;
// const addTwo = (a, b) => (a + b);

// const addTwo = (a, b) => ({username: "hitesh"});
// console.log(addTwo());

// const myArray = [ 9, 5, 6, 1, 7, 3];

// myArray.forEach()

////?=================================================================================
// const user = {
//     username: "baljeet",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username}, welcome to website`); 
//         console.log(this);
        
        
//     }
// }
// user.welcomeMessage()
// user.username = "vikas"
// user.welcomeMessage()

// console.log(this);



// function chai (){
//     let username = "baljeet"
//     console.log(this.username);
    
// }
// chai ()


// const chai = function() {
//     let username = "baljeet"
//     console.log(this.username);    
// }
// chai()

// const chai = () => {
//     let username = "baljeet"
//     console.log(this);    
// }
// chai()

let a = 10; 
console.log(a);
