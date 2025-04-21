const button = document.getElementById('btn');
const parent = document.querySelector('.parent'); // use querySelector for class
const div = document.createElement('input');

button.addEventListener("click", function() {
    div.innerHTML = "Hello, I'm a new div!";
    div.style.fontSize = '24px';
    div.style.color = 'red';
    div.style.color = 'red';
    div.style.background = 'pink';
    div.placeholder = "hello bro"
    parent.appendChild(div);
})


button.addEventListener('click', function(){
    
})


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
