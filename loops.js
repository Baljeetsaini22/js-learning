////! ==================For loop===============

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");        
//     }
//     console.log(element);    
// }

// for (let i = 1; i <= 10 ; i++) {
//     console.log(`outer loop value: ${i}`);
    
//     for (let j = 1; j <= 10 ; j++) {
//         // console.log(`inner loop value ${j} and inner loop value ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }    
// }

// let myArray = ["flash", "batman", "ironman"]
// console.log(myArray.length);

// for (let i = 0; i < myArray.length ; i++) {
//     const element = myArray[i]
//     console.log(element);        
// }

////! break and continue 

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         continue;        
//     }
//     console.log(`Value of i is ${i}`);    
// }

////!============while loop================

// let index = 0 ;
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2;
    
// }

// let myArray = ['flash', 'batman', 'superman ']
// let arr = 0 ;
// while (arr <myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1;    
// }

////! -------------do While loop-----------------

// let score = 1;
// do {
//     console.log(`score is ${score}`);   
//     score++; 
// } while (score <= 10)

////!---------------for each, in , of----------------

// const arr = [1, 2, 3, 4, 5]
 
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
//     continue
    
// }

// const map = new Map()
// map.set ('IN', "India")
// map.set ('UK', "United Kingdom")
// map.set ('USA', "United State America")

// console.log(map);

// for (const [Key, value] of map) {
//     console.log(Key, ':-', value);

// for (const key in map) {
//     console.log(key);
    
// }
    
// }
// const myObject = {
//     'game1': 'NFS',
//     'gama2' : 'BGMI'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);    
// }  //do not work this type 


// const myObject = {
//     js: 'javascrip',
//     cpp : 'C++',
//     rb : "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }
// const programming = ['js', "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     console.log(programming[key]);
    
// }

// const coding = ['js', "rb", "py", "java", "cpp"];

// coding.forEach( function (itme) {
//     console.log(itme);    
// });

// coding.forEach ( (itme) => {
//     console.log(itme);    
// });

// function printMe(itme) {
//     console.log(itme);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);    
// });

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageFileName);
// });