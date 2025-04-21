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
console.log(server)