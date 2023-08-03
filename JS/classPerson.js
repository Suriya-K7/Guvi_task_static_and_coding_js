console.log(`
********************class for Person*******************

`);
class Person {
  constructor(firstName, lastName, age, email, company) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.company = company;
  }
  details() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old, and he is working in ${this.company}. for more information contact him '${this.email}'`;
  }
}
let suriya = new Person(
  "Udhayasooriyan",
  "kesavamurthy",
  28,
  "usraising@gmail.com",
  "GUVI"
);
console.log(suriya.details());
