// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
// var c = 300
// let a = 300
// if (true) {
//     let a = 10;
//     const b = 20;
//     console.log("inner: ", a);    
// }
// console.log(a);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// } 

//! =================Nested Scope==================

function one() {
    const username = "Baljeet"

    function two() {
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);

    two()
    
}
// one ()
//!===================================================
if (true) {
    const username = "baljeet"
    if (username === "baljeet") {
        const website = " youtube"
        // console.log (username + website);
    }
    // console.log(website);    
}
// console.log(username);

//!=============interesting====================
// console.log(addone(5))
// function addone(num) {
//     return num + 1    
// }

// const addTow = function(num) {
//     return num + 2
// }
// addTow(5)
// console.log(addTwo(5));
