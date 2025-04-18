//! <---------------- SingleTon -------------------->
//! ----Object literals--------- 
//? Object.create

// const mySym = Symbol("key1")
// const jsUser = {
//     name: "Baljeet",
//     "full name": "Baljeet Singh",
//     [mySym]: "myKey1",
//     age: 15,
//     location: "Mohali",
//     email: "baljeet@google.com",
//     isLoggedIn: false,
//     lastLoginDay: ["MOnday", "Saturday"]
// }

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email = "baljeet@microsoft.com";
// Object.freeze(jsUser);
// jsUser.email = "baljeet@gamil.com";
// console.log(jsUser);

// jsUser.greeting = function() {
//     console.log("Hello Js user");
    
// }

// console.log(jsUser.greeting());

// jsUser.greetingTow = function() {
//     console.log(`Hello Js user, ${this.name}`);
    
// }

// console.log(jsUser.greetingTow());

//!---------------------------------------------------------------------

// const tinderUser = new Object()  // SingleTon Object 
// const tinderUser = {}       // None SingleTon Object

// tinderUser.id = "123abc";
// tinderUser.name = "Vikas";
// tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// const regularUser = {
//     email: "vikas@gmail.com",
//     fullname: {
//         userfullname : {
//             firstname: "vikas",
//             lastname: "kumar"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         name: "Baljeet"
//     },
//     {
//         id: 2,
//         name: "Baljeet"
//     }
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//-----------------------------------------

// const course = {
//     courseName: "Js in hindi",
//     price: "999",
//     courseInstructor: "Baljeet"
// }
// course.courseInstructor
// const {courseInstructor: instructor} = course

// console.log(instructor);

/* const navbar = ({company}) => { 
    }                           // deStructuring 
navbar(company = "hitesh")*/ 

//================JSON API================= 

// {
//     "name": "baljeet",
//     "couseName": "Js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {},
// ]