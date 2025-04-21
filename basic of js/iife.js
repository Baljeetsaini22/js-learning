//? =============|Imediately Invoked Function Expressions (IIFE)|============== 
//! Globle Scope के Pollution से Problum होती है कई बार तो उस Globle Scope के जो Variable है जो भी वहा Declaration है उसके Pollution को हटाने के लिए हमने IIFE का प्रयोग किया । 
//!write two IIFE in program with use semicolon (;) end of program

// //? Named iife
// (function imediately(){
//     console.log(`hello`)
// }
// )();

// //?unNamed IIFE and pass parameters in IIFE
// ( (name) => {
//     console.log(`Welcome Mr ${name}`);    
// })('baljeet');