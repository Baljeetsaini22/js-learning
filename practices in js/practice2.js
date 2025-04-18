////? Reverse an array without using .reverse()
// let num = [25, 36, 45, 84, 65];
// let reversed = "";
// for (let i = num.length - 1; i >= 0; i--) {
//     reversed += num[i];
// }
// console.log(reversed);


////? Find the maximum number in an array
// let num = [59, 34, 76, 65,74, 15, 75, 95, 55,37, 98, 86];
// let largest = num[0];
// for (i = 0; i <= num.length; i++) {
//     if (num[i] > largest) {
//        largest = num[i]
//     }    
// }
// console.log(largest);


////? Remove duplicates from an array
// const arr = [1,5, 5, 2, 3, 4,9, 9,2, 3];
// const arr2 = [];
// for(let i of arr) {
//     if(arr2.indexOf(i) === -1) {
//         arr2.push(i);
//     }
// }
// console.log(arr2);


////? Merge two objects
// const user1 = {
//     id: 1, 
//     name: "baljeet", 
//     company: "VR" 
// }
// const user2 = {
//     hi: 2, 
//     name1: "Vikas", 
//     company1: "VR" 
// }
// const users = { ...user1, ...user2 };
// console.log(users);


////? - Check if a number is prime
// let num=0
// for(i = 2; i <= 100; i++) {    
//     for( j = 1; j <= i ; j++) {        
//         if(i % j == 0)            
//         num++
//     }
//     if(num==2) 
//     console.log(i)
//     num=0  
// }


////? - Sum of digits of a number

// let arr = [ 1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);


////? - Count vowels in a string 

// function vowels(string) {
//     let count = 0;
//     for (char of string) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     console.log(count);    
// }
// vowels("baljeet")


////? - Reverse each word in a string 

// let name = "Hello World";
// let reversed = "";

// for (let i = name.length - 1; i >= 0; i--) {
//     reversed += name[i];
// }
// console.log(reversed);







////? Flatten a nested array

    // const arr = [1, 2, 3, 4, [5, 6, [6, 7], 7, 8]]
    
    // let arr2 = [];
    // function flat(arr) {
    //      arr.forEach(element => {
    //           if (typeof (element) == 'object') {
    //                flat(element);
    //           } else {
    //                arr2.push(element);
    //           }
    //      });    // }
    
    // flat(arr);
    
    // console.log(arr2);
////! Object-Based Questions
////? Get keys and values separately from an object
////? - Convert object to array of key-value pairs
// const userName = {
//     a: "b",
//     c: "d",
//     e: 5, 
// }

// while (userName) {
    
// }
////? - Check if object is empty
//! Number-Based Questions
////? - Find factorial of a number
////? - Check if number is Armstrong (e.g., 153)
////! String-Based Questions 
////? - Check if a string is a palindrome 
////? - Find the first non-repeating character 