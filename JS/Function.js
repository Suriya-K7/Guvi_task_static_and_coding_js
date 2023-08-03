console.log(`

**************Function***************


`);

// 1) Print odd numbers in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function odd(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log("Printing odd numbers in an array");
console.log("input array=[1,2,3,4,5,6,7,8,9]");
console.log("output");
console.log(odd(array)); //output will be [1,3,5,7,9]
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// Convert all the strings to title caps in a string array
let name = ["s", "u", "r", "i", "y", "a"];
function caps(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  return result;
}
console.log("Converting all the strings to title caps in a string array");
console.log(`input name=['s','u','r','i','y','a']`);
console.log("output");
console.log(caps(name));
//output will be [ 'S', 'U', 'R', 'I', 'Y', 'A' ];
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// Sum of all numbers in an array
let arraySum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sum(arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    result += +arr[i];
  }
  return result;
}
console.log("Sum of all numbers in an array");
console.log(`input arraySum=[1,2,3,4,5,6,7,8,9]`);
console.log("output");
console.log(sum(arraySum)); //output will be 45
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// Return all the prime numbers in an array
let arrayCheckPrime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 17, 19];
function findPrimes(arr) {
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
}
console.log("Return all the prime numbers in an array");
console.log(`input arrayCheckPrime=[1,2,3,4,5,6,7,8,9,11,13,17,19]`);
console.log("output");
console.log(findPrimes(arrayCheckPrime));
//output will be[2,3,5,7,11,13,17,19]
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

//5) Return all the palindromes in an array
let data = ["nitin", "malayalam", "suriya", "madam"];
let palindromesArray = [];
function palindromes(data) {
  for (i = 0; i < data.length; i++) {
    if (data[i] == data[i].split("").reverse().join("")) {
      palindromesArray.push(data[i]);
    }
  }
  return palindromesArray;
}
console.log("Return all the palindromes in an array");
console.log(`input data=['nitin','malayalam','suriya','madam']`);
console.log("output");
console.log(palindromes(data)); //if forward & backward of sentence is same result will be true.
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

//6) Return median of two sorted arrays of the same size.
let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];
function median(a, b) {
  let concat = [...a, ...b];
  let result = [];
  let length = concat.length;
  if (length % 2 == 0) {
    result.push(concat[length / 2 - 1], concat[length / 2]);
  } else {
    result.push(concat[Math.floor(length / 2)]);
  }
  return result;
}
console.log("Return median of two sorted arrays of the same size.");
console.log(`input a=[1,2,3,4]; b=[5,6,7,8];`);
console.log("output");
console.log(median(a, b)); //if input total length  is even will return median as two dight, if oreturn one dight
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// 7) Remove duplicates from an array
// method 1: by indexof
let arr = [1, 2, 2, 3, 4, 4, 5];
function indexMethod(arr) {
  let unique = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  return unique;
}
console.log("Remove duplicates from an array method one using indexof");
console.log(`input arr = [1, 2, 2, 3, 4, 4, 5]`);
console.log("output");
console.log(indexMethod(arr));
//output will be [ 1, 2, 3, 4, 5 ]
console.log(`----------------------------------------------------`);

// method 2: by using set
function setMethod(arr) {
  return [...new Set(arr)];
}
console.log("Remove duplicates from an array method two using set");
console.log(`input arr = [1, 2, 2, 3, 4, 4, 5]`);
console.log("output");
console.log(setMethod(arr));
//output will be [ 1, 2, 3, 4, 5 ]
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// 8) Rotate an array by k times
let arry = [1, 2, 3, 4, 5];
let k = 3;
function arrayRotation(a, b) {
  let result = [];
  for (z = 0; z < a.length; z++) {
    result.push(0);
  }
  for (i = 0; i < b; i++) {
    for (j = 0; j < a.length; j++) {
      if (j == 0) {
        result[a.length - 1] = a[0];
      } else {
        result[j - 1] = a[j];
      }
      if (j == a.length - 1) {
        a = [...result];
      }
    }
  }
  return a;
}
console.log("Rotate an array by k times");
console.log(`input arry=[1,2,3,4,5]; k=3;`);
console.log("output");
console.log(arrayRotation(arry, k));
// output will be array with k times rotated

/*-----------------------------------------------------*/
