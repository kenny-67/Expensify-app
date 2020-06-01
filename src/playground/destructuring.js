//Object Destructuring

const person = {
  name: "kenneth",
  age: 54,
  location() {
    address: "some address";
  }
};

//extrating the name and age properties of the person object using object destructuring
const { name, age } = person;

console.log(name, age);

//Array Destructuring

const address = ["some random address", "okota", "lagos"];

//extrating the name and age properties of the person object using array destructuring
const [address, city, state] = address;

console.log(address, state, city);

const item = ["cofee (hot)", "200", "456", "3456"];

const [coffee, , medium] = item;
