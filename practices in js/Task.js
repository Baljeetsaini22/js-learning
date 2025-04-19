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




// !======================| v| -----------------------


// ? function return largest three number
// function globalfunc(){
//         console.log(`${this[id]},${this.name},${this.meal}`)
// }


// const id = Symbol()
// const onj = {
//   [id]: 1,
//   name : 'tigger',
//   age: 10,
//   meal : "non-veg",
// };

// const obj2 = {
//     [id]: 2,
//     name : 'tigger',
//     age: 10,
//     meal : "non-veg",
//   };
// globalfunc.call(onj)
// globalfunc.call(obj2)



// onj.bio()
// onj.hunting()


// factory function
 
const server = [] 
function bioDataFactory(id, name, age, bloodGroup, address, city, state, phoneNumber, telephoneNumber, pincode, country) {
    return {
        id,
        name,
        age,
        bloodGroup,
        address,
        city,
        state,
        phoneNumber,
        telephoneNumber,
        pincode,
        country
    };
}



const person = bioDataFactory(
    1, 
    "Alice", 
    30, 
    "O+", 
    "123 Street Name", 
    "New York", 
    "NY", 
    "1234567890", 
    "0987654321", 
    "10001", 
    "USA"
);

server.push(person)
// console.log(server)

/** __proto__ */
// to create chaning between to objects 

const onb1 = {
    a : 32,
    b: 34
}

const obj2 = onb1

obj2.c = 4
// console.log(obj2.a)


// __proto__ [[prototype]]
// prototype [[prototype]]



/** prototype  */

function createUsr(fstName, lstName, age, email, address) {
    const usr = Object.create(createUsr.prototype); // give a empty object with __proto__ refrence
    // const usr = {};
    usr.fstName = fstName;
    usr.lstName = lstName;
    usr.age = age;
    usr.email = email;
    usr.address = address;
    return usr;
};

const usr1 = createUsr("gamer", "pro", 11, "gam@mail.to", "#12 st.3434");
createUsr.prototype.about = function () { return `${this.fstName} ${this.age}` };

createUsr.prototype.sendPost = function(){
    return `${this.email} ${this.address}`
}

console.log(usr1.sendPost())
