let obj1 = { name: "person", age: 5 };
let obj2 = { age: 5, name: "person" };
let result = true;
if (Object.keys(obj1).length == Object.keys(obj2).length) {
  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      result = false;
      break;
    }
  }
} else {
  result = false;
}
console.log(
  "compare two JSON have same properties without order in javascript"
);
console.log(obj1);
console.log(obj2);
if (result) {
  console.log(`obj1 & obj2 are same`);
} else {
  console.log(`obj1 & obj2 are not same`);
}
