//! <-------------Array----------------->

// const myArr = [0, 1, 2, 3, 4, 5];

// myArr.push(7); // add array value in last 
// myArr.push(8);
// myArr.pop();  // remove array value from last
// myArr.unshift(9) // add array value in first
// myArr.shift() // remove array value from first

// console.log(myArr);

// console.log(myArr.includes(9));   output value in true/false (value in array is true and the value is not in array is false)
// console.log(myArr.indexOf(3)); putput tell the place of array 

// const newArr = myArr.join()
// console.log(newArr);

// console.log(myArr[1]);


//! <-------slice, splice--------->
// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);


// const cars = ["Mahindra", "Kia", "Ford", "Tata", "Suzuki"];
// const cars2 = ["Toyota", "Jeep", "Audi", "BMW", "Volvo"];

// cars.push(cars2);

// console.log(cars);
// console.log(cars[3][1]);

// const allCars = cars.concat(cars2);

// console.log(allCars);

// const all_cars = [ ...cars, ...cars2];  //sprad operator 

// console.log(all_cars);

// const hello = [1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 2]]];

// const real_hello = hello.flat(Infinity);
// console.log(real_hello);


// console.log(Array.isArray("Baljeet"));

// console.log(Array.from("Baljeet"));
// console.log(Array.from({name: "Baljeet"}));   // interesting 

// let score1 = 100 
// let score2 = 200
// let score3 = 300 

// console.log(Array.of(score1, score2, score3));