////! condition 

// if (2 == "2") {
//     console.log("executed")
// } else {
// console.log("not executed")
 
// }

// const temperature = 41

// if (temperature < 50) {
//     console.log("less than 50")
// } else {
// console.log("temperature is greater than 50")
 
// }
////! scope 
// const score = 200 
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);    
// }
// console.log(`user score: ${score}`);

////!do not execute this type
// const balance = 1000 ;
// if (balance > 500) console.log("text"), console.log("baljeet");
;

// const balance = 1000;
// if (balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
    
// }

// const userloggedIn = true;
// const debitCard = true;
// loggedInFromGoogle = false;
// loggedInFromEmail = true

// if (userloggedIn && debitCard && 2==2) {
//     console.log("Allow to buy course");
    
// } if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
    
// }

////! Switch 
// switch (key) {
//     case value:
//         break;
//         default: 
//         break;
// }

// const month = 3;
// switch (month) {
//     case 1: 
//         console.log("januray");
//         break;
//     case 2: 
//         console.log("february");
//         break;
//     case 3: 
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case March");        
//         break;
// }

// const userEmail = "b@gmail.com"

// if (userEmail) {
//     console.log("Got user email");    
// } else {
//     console.log("Don't have user email");    
// }

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");    
// } else {
//     console.log("Don't have user email");    
// }

////! falsy values 

////?  false, 0, -0, BigInt 0n, empty string "", null, undefined, NaN
////! truthy values 
////! "0", 'false', " ", [], {}, function(){} 

// if (userEmail.length === 0) {
//     console.log("array is empty");    
// }

// const emptyObj = {} 
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");    
// }

////? Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10;
// val2 = undefined ?? 10;
// val3 = null ?? undefined ?? 20;
// console.log(val1);
// console.log(val2);
// console.log(val3);

////! Terniary Operator 

////? condition ? true : false 

// const iceTeaPrice = 100 ;
// iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

////! +++++++++++++++++loop++++++++++++++++++++