// "use strict"

// //? <--------=============| Task |=================---------->

// //! Add to numbers using function 
// function addTwoval(a , b) {
//     return a + b;
// }
// console.log(addTwoval(8, 3));


// //! function Odd or Even
// function oddEven(num) {
//     if (num % 2 == 0) {
//         return `${num} = Number is even`;
//     } else {
//         return `${num} = Number is odd`;
//     }
// }
// console.log(oddEven(456))

// //? function Odd or Even with return
// function evenOdd(a) {
//     return a % 2 == 0;
// } 
// evenOdd(5) ? console.log("Odd") : console.log("even");


// //! string in upperCase using function
// function upperCase(name) {
//     return name.toUpperCase()    
// }
// console.log(upperCase("baljeet"))


// //! factorial function
// let value = [1, 2, 3, 4, 5]
// function abc(params) {
//     let val = 1;
//     for(let i = 1 ; i <= value.length ; i++){
//         val *= i
//     }
//     return val
// }
// console.log(abc())


// //! <=========================================================>
// //! array of number and return average using function 
// const arr = [89, 75, 92, 62, 81];
// function average() { 
//     let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log("Sum of Nums: ",sum);
//     return sum / arr.length    
// }
// console.log(arr);
// console.log("Average:",average(arr));


// //! reverse string using function 
// function reverse(string) { 
//     for (let i = string.length - 1; i >= 0; i--) { 
//         reversed += string[i];
//     }
//     console.log(reversed);
// }
// let reversed = "";
// reverse("baljeet Singh");


// //! find vowal in string using function 
// function vowal(string) {
//     let count = 0;
//     for (char of string) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count ++;
//         }
//     } 
//     return count   
// }
// console.log(vowal("baljeet singh"));


// //! find last three largest number in array
// let arr = [3, 89, 6, 2, 98, 56, 45, 5, 32];
// let largest= arr[0];

// for (i=0; i < arr.length; i++){
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// };
// const sorted = arr.sort((a , b) => a - b)
// console.log(sorted.slice(-3))


// const myArrow  = () => {
//     let a = "hello"
//     return console.log(this.a);
    
// }
// console.log(myArrow());
// (function hello () {
//     let a = 23;
//     console.log(a);
    
// })
// ()

// function add() {
//     let b = "hellow"
//     console.log(this.b);
    
// }

// add()


// const obj = {
//     name: "baljit",
//     role: "web dev",
//     func:  () => {
//         console.log(this.name);
        
//     }
// }
// console.log(obj.func());

// function add () {
//     let a = 23;
//     "use stirct"
//     console.log(this.a);
    
// }
// add


// function baljit() {
//     let a = 45;
//   let b = () => {
//    console.log(this.a)
   
//   }
//   console.log(b());
  
// }
// baljit()

// const obj = {
//     name: "hari",
//     func: function baljeet() {
//         const arrow = () => {
//             console.log(this.name);
            
//         }
//         arrow()        
//     }
// }
// console.log(obj.func());


// console.log(this);
// console.log(window);

// console.log(window);
const obj = {
    name: "baljit",
    func3: function () {
    
        const a = () => {
          return  this.name;    
        }
        console.log(a())
    }
} 
const obj2 = {
    name: "hello"
}

console.log(obj.func3.call(obj2));
// apply 
// bind

// obj.call(obj2);






// const arrow = () =>(  "hello world" )
// console.log(arrow());