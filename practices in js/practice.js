////?--------------String method---------------------

const name = "learn-JS"
const name2 = "     bAlJeetSingh     "

// //! string convert in uppercase
// console.log(name2.toUpperCase());

// //! string convert in lowercase
// console.log(name2.toLowerCase());

// //! remove space using trim method
// console.log(name2.trim());                           

// //! string from index 0 of 4 using slice method
// console.log(name.slice(0, 4));

// //! find the character at a certain index using includes method
// console.log(name.charAt(4));

// //! replace "-" to "/"
// console.log(name.replace("-", "/"));

// //! convert a string into an array based on a separator
// console.log(name.split("-"));

// //! join two strings together using concat method
// console.log(name2.concat(name));

// //! extract part of a string from index 0 to 4  // 	What method extracts characters between two indexes?
// console.log(name.substring(0, 4));

// //! How do you check if a string contains a word?
// console.log(name.includes("n"));


////?========================ARRAY METHODS===================================

const myArr = [7, 6, 0, 4, 8, 3];
const myArr2 = [9, 5, 2, 1];
const string = ["vikas", "rahul", "ayush", "hari", "baljeet", "abi"]
////! add an item to the end of an array
// myArr.push(12);
// console.log(myArr);

////! remove the last item from an array
// myArr.pop();
// console.log(myArr);

// //! remove the first item from an array
// myArr.shift()
// console.log(myArr);

////! add an item to the beginning of an array
// myArr.unshift(55)
// console.log(myArr);

////! sort an array alphabetically or numerically
// console.log(myArr.sort()); 
// console.log(string.sort());

////! add/remove elements in an array at a specific index
// myArr.splice(2, 1, "Hello")
// console.log(myArr);

// //! merge two arrays
// console.log(myArr.concat(myArr2));

// //! reverse the order of items in an array
// console.log(myArr.reverse());            

// //! convert an array into a string with a separator
// console.log(myArr.join(""));

// //! check if an item exists in an array
// console.log(myArr.includes(7));

// //! find the index of a specific value
// console.log(myArr.indexOf(8));

////! copy part of an array without changing the original array
// console.log(myArr.slice(2,5));

////! transform each item in an array into something new
// console.log(Array.from("baljeet"));
////?===================get from goolge==========================
////! loop through each item in an array


////! get only items that meet a condition from an array  


////! get a single value from all elements (like sum)
//const sumNum = [5, 10, 15, 20];
// const value = 0;
// const sumAll = array1.reduce(
//   (preVal, CurrVal) => preVal + CurrVal, value,
// );
// console.log(sumAll);

////! get the first item that matches a condition
// console.log(myArr);
// const array1 = [20, 85, 95, 5, 99, 10, 15];
// const array2 = [5, 12, 50, 130, 44];
// const found = array1.findLast((element) => element > 25);
// console.log(found);



////?-------------------------OBJECT METHODS------------------------------
const user1 = {
    id: 1,
    firstName: "baljeet",
    lastName: "singh",
    company: "VR"
}
const user2 = {
    id: 2,
    firstName: "vikas",
    lastName: "kumar",
    company: "VR"
}

// ////! get all keys of an object
// console.log(Object.keys(user1));

// //! get all values of an object
// console.log(Object.values(user1));

// //! get all key-value pairs as an array
// console.log(Object.entries(user1));

////! copy values from one object to another
// const newUser = user2;
// newUser.firstName = "Hari"
// console.log(newUser);

// //! prevent adding/removing properties but allow value change
// delete user1.lastName;
// user1.course = "Web Dev"
// console.log(user1);

////! prevent modifications to an object
// user2.firstName = "Hariom"
// user2.company = "digibeez"
// console.log(user2);

// //! check if a key exists in an object
// console.log("company" in user2);

////! remove a key from an object
// delete user2.lastName;
// console.log(user2);
// console.log(user2.lastName);


// //! convert a key-value pair array back to an object
// const vr = [['name', 'vikas'], ['age', 18]];
// const digi = Object.fromEntries(vr)
// console.log(digi);


////?------------------------------NUMBER METHODS--------------------------------------------

const score = 254.5;
// //! convert a number to a string
// console.log(score.toString());

// //! keep a number with fixed decimal places (e.g. 2 digits)
// console.log(score.toFixed(2));

// //! check if a value is not a number?
// console.log(Number.isNaN(NaN));

// //! check if a number is an integer?
// console.log(Number.isInteger(152));

////! round a number down?
// console.log(Math.floor(1.6));

// //! round a number up?
// console.log(Math.ceil(1.6));

// //! get a random number between 0 and 1?
// console.log(Math.random());

// ////! find the highest number in a group of numbers?
// console.log(Math.max(6, 7, 95, 9, 41, 5, 66, 2));

// //! find the smallest number in a group of numbers?
// console.log(Math.min(6, 7, 95, 9, 41, 5, 66, 2));

// //! convert a string to a whole number
// console.log(parseInt(score));

// //! convert a string to a decimal number?
// console.log(parseFloat(score));

// //! round a number to the nearest whole number?
// console.log(Math.round(5.6));