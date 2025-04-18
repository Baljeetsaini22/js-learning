//! Srting and its type in javaScript

// const name = "baljeet"
// const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('baljeet/saini')
// console.log(gameName)
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('b'));
// console.log(gameName.lastIndexOf(2));
// console.log(gameName.includes());


const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-12, 5);
// console.log(anotherString);


// const newStringOne = "    Baljeet   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://baljeetsaini22.github.io/Tic%20tac-toe-Game/"

// console.log(url.replace('%20', '-'));
// console.log(url.includes('sunder'));

// console.log(gameName.split('/'));





//--------------------------------------------------

//! Numbers in JavaScript 

// const score = 400 ;
// console.log(score);

const balance = 121;
// console.log(balance);

// console.log(balance.toString())
// console.log(balance.toFixed(1));

const otherNumber = 123.8451 ;

// console.log(otherNumber.toPrecision(3));

// console.log(Number.isInteger(otherNumber));

// console.log(Number.isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(0/0));
// console.log(Number.isNaN(23));

// const hundreds = 1000000;

// console.log(hundreds.toLocaleString('en-IN'));

//--------------------------------------------------------
//! Maths in javaScript

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 8, 6));
// console.log(Math.max(2,6,9,5));
// console.log(Math.random());
// console.log(Math.random()*10 +1);
// console.log(Math.floor(Math.random()*10 + 1));

// const min = 10;
// const max = 20;

// console.log(Math.random() * (max - min + 1));
// console.log(Math.floor(Math.random() * (max - min + 1) + min));



//!-------------------------------------------------------------------------
//! <-------slice, splice--------->


// const myn1 = myArr.slice(-7, 3);
// console.log("A", myArr);
// console.log(myn1);

// const myn2 = myArr.splice(2, 2, "baljeet");
// console.log("B", myArr);
// console.log(myn2);

// const myn3 = myArr.splice(1, 4,);

// console.log("C", myArr);
// console.log(myn3);

const baljeetArray = [3,4,5,6,7,8,9,80];
// let c = baljeetArray.slice(1, 3);
// console.log(c);
// console.log(baljeetArray);


// console.log(baljeetArray.slice(-1, 8)); //todo slice method
// let b = baljeetArray.splice(3,1,89)
// console.log(baljeetArray);
// console.log(b);


// const strName = "baljeet-singh";
// const stringNew = strName.substring(1, 5)
// console.log(strName.slice(4));
// console.log(strName.slice(8, 13));
// let b = ["45","baljeet", "hari", "vikas"]
// console.log(b.slice(2, -2));

// console.log(strName.substring(8, 1));
// console.log(strName.substring(11, 5));

// const gameName = new String('baljeet/saini')
// const newString = gameName.substring(0, 4)
// console.log(newString);

// const a = " baljeet/saini ";
// const b = "singh"

// console.log(a.concat(b));

// const myArr = [0, 1, 2, 3, 4, 5];
// myArr.find(5);
// console.log(myArr);
// console.log(myArr.find(2));