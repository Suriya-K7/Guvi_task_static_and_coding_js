console.log(`

**************Arrow function***************


`);
// 1) Print odd numbers in an array
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var odd = (arr) => {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log("Printing odd numbers in an array");
console.log("input array=[1,2,3,4,5,6,7,8,9]");
console.log("output");
console.log(odd(array1)); //output will be [1,3,5,7,9]
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// Convert all the strings to title caps in a string array
let name1 = ["s", "u", "r", "i", "y", "a"];
var caps = (arr) => {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  return result;
};
console.log("Converting all the strings to title caps in a string array");
console.log(`input name=['s','u','r','i','y','a']`);
console.log("output");
console.log(caps(name1));
//output will be [ 'S', 'U', 'R', 'I', 'Y', 'A' ];
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// Sum of all numbers in an array
let arraySum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = (arr) => {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    result += +arr[i];
  }
  return result;
};
console.log("Sum of all numbers in an array");
console.log(`input arraySum=[1,2,3,4,5,6,7,8,9]`);
console.log("output");
console.log(sum(arraySum1)); //output will be 45
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// Return all the prime numbers in an array
let arrayCheckPrime1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 17, 19];
var findPrimes = (arr) => {
  const primes = [];
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && arr[i] > 1) {
      primes.push(arr[i]);
    }
  }
  return primes;
};
console.log("Return all the prime numbers in an array");
console.log(`input arrayCheckPrime=[1,2,3,4,5,6,7,8,9,11,13,17,19]`);
console.log("output");
console.log(findPrimes(arrayCheckPrime1));
//output will be[2,3,5,7,11,13,17,19]
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

//5) Return all the palindromes in an array
let data1 = ["nitin", "malayalam", "suriya", "madam"];
let palindromesArray1 = [];
var palindromes = (data) => {
  for (i = 0; i < data.length; i++) {
    if (data[i] == data[i].split("").reverse().join("")) {
      palindromesArray1.push(data[i]);
    }
  }
  return palindromesArray1;
};
console.log("Return all the palindromes in an array");
console.log(`input data=['nitin','malayalam','suriya','madam']`);
console.log("output");
console.log(palindromes(data1)); //if forward & backward of sentence is same result will be true.
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/
