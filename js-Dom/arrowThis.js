const user = {
    username: "baljeet",
    id: 123,
    welcomeMsg: function() {
        console.log(`${this.username}, welcome to website`);  
        // console.log(this);
              
    }
}
// user.welcomeMsg()
// user.username = "vikas"
// user.welcomeMsg()

// console.log(this); 

// function one() {
//     let username = "baljeet"
//     console.log(this.username);   
    
// }
// one()

// const two = function () {
//     let username = "baljeet"
//     console.log(this.username);    
// }
// two()

// const three = () => {
//     let username = "baljeet"
//     console.log(this);    
// }
// three()

// const addTow = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTow(6, 7));

// const sumTow = (num1, num2) => num1 + num2

// console.log(sumTow(6, 7));
// const sumTow1 = (num1, num2) => (num1 + num2)

// console.log(sumTow1(9, 4));
// const sumTow2 = () => ({username: "baljeet"})
// console.log(sumTow2());

// const myArray = [2, 5, 3, 7, 8];
// myArray.forEach(() => {
//     console.log(myArray);
    
// })
