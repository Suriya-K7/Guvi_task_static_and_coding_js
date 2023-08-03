// JSON iterate methods
// for loop
console.log("iteration using for loop of JSON");
let employees = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Anna", lastName: "Smith" },
  { firstName: "Peter", lastName: "Jones" },
];
for (i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}
// output will be :
// { firstName: 'John', lastName: 'Doe' }
// { firstName: 'Anna', lastName: 'Smith' }
// { firstName: 'Peter', lastName: 'Jones' }

// for in loop
console.log("iteration using for in loop of JSON");
let person = { fname: "John", lname: "Doe", age: 25 };
for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}
// output will be :
// fname : John
// lname : Doe
// age : 25

// for of loop
console.log("iteration using for of loop of JSON");
let person2 = { fname: "John", lname: "Doe", age: 25 };
for (let key of Object.keys(person2)) {
  console.log(`${key} : ${person2[key]}`);
}
// output will be :
// fname : John
// lname : Doe
// age : 25

// forEach

console.log("iteration using forEach loop of JSON");
let person3 = { fname: "John", lname: "Doe", age: 25 };
Object.keys(person3).forEach(function (key) {
  console.log(`${key} : ${person3[key]}`);
});
// output will be :
// fname : John
// lname : Doe
// age : 25
