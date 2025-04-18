// const coding = ['js', "rb", "py", "java", "cpp"];

// const values = coding.forEach( (item)=>{
//     console.log(item);
//     return item;
    
// });
// console.log(values);

// const myNums = [1, 2, 3,4, 5, 6, 7, 8, 9, 10];
////! use fillter
// const newNums = myNums.filter((num) => num > 5);
// console.log(newNums);

// const newNums = myNums.filter((num) =>{
//     return num > 5
// });
// console.log(newNums);

////! use condition 
// const newNums = []
//  myNums.forEach((num) =>{
//     if (num > 5) {
//         newNums.push(num)
//     }
// });
// console.log(newNums);

// const books = [
//     { title: 'Book One', genre: 'History', publish: 1980, edition:2023 },
//     { title: 'Book Two', genre: 'Math', publish: 2015, edition:2023 },
//     { title: 'Book Three', genre: 'Physics', publish: 1997, edition:2022 },
//     { title: 'Book Four', genre: 'History', publish: 1999, edition:2024 },
//     { title: 'Book Five', genre: 'English', publish: 2003, edition:2021 },
//     { title: 'Book Six', genre: 'Hindi', publish: 1970, edition:2025 },
//     { title: 'Book Eeven', genre: 'English', publish: 2003, edition:2020 },
//     { title: 'Book Eight', genre: 'Math', publish: 2002, edition:2018 },
//     { title: 'Book Nine', genre: 'Hindi', publish: 1991, edition:2019 },
// ]

// let userBooks = books.filter((bk) => bk.genre === `History`)
// userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === "History"
// });
// console.log(userBooks);

////! map 

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNumbers.map((num) => {return num + 10})

// const newNums = myNumbers
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)
// console.log(newNums);

////! <--------------reduce ---------------->

// const myNum = [1, 2, 3, 4, 5]

// const myTotal = myNum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval    
// }, 0 )

// console.log(myTotal);

// const myTotal = myNum.reduce( (acc, curr) => acc + curr, 0 )

// console.log(myTotal);

// const shoppingCart =[ 
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "Mobile dev course",
//         price: 5000
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]
// const priceToPay = shoppingCart.reduce((acc, itme) => acc + itme.price, 0)

// console.log(priceToPay);
