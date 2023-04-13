// Input Object...
const person = {
    name: "Rahul Sharma",
    age: 22,
    address:{
        street: "B8, Block B, Industrial Area.",
        city: "Sector 12, Bhubaneshwar",
        state: "Uttar Pradesh"
    },
};

// Function Declaration...
function extractProperties(obj) {

    const Person = {
        name: obj.name,
        street: obj.address.street
    };

    return Person;
}

console.log(extractProperties(person));