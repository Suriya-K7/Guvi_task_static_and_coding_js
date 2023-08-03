console.log(`

**************IIFE***************


`);

// 1) Print odd numbers in an array

(function odd(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      result.push(arr[i]);
    }
  }
  console.log("Printing odd numbers in an array");
  console.log("input array=[1,2,3,4,5,6,7,8,9]");
  console.log("output");
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//output will be [1,3,5,7,9]
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// Convert all the strings to title caps in a string array

(function caps(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  console.log("Converting all the strings to title caps in a string array");
  console.log(`input name=['s','u','r','i','y','a']`);
  console.log("output");
  console.log(result);
})(["s", "u", "r", "i", "y", "a"]);

//output will be [ 'S', 'U', 'R', 'I', 'Y', 'A' ];
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// Sum of all numbers in an array

(function sum(arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    result += +arr[i];
  }
  console.log("Sum of all numbers in an array");
  console.log(`input arraySum=[1,2,3,4,5,6,7,8,9]`);
  console.log("output");
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//output will be 45
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// Return all the prime numbers in an array

(function findPrimes(arr) {
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
  console.log("Return all the prime numbers in an array");
  console.log(`input arrayCheckPrime=[1,2,3,4,5,6,7,8,9,11,13,17,19]`);
  console.log("output");
  console.log(primes);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 17, 19]);

//output will be[2,3,5,7,11,13,17,19]
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

//5) Return all the palindromes in an array
/*
(function palindromes(data){
    if(data==data.split('').reverse().join('')){
        console.log(`${data} is palindromes`)
    }else{
        console.log(`${data} is not palindromes`)
    }
  })('nitin')*/
(function palindromes(data) {
  let palindromesArray = [];
  for (i = 0; i < data.length; i++) {
    if (data[i] == data[i].split("").reverse().join("")) {
      palindromesArray.push(data[i]);
    }
  }
  console.log("Return all the palindromes in an array");
  console.log(`input data=['nitin','malayalam','suriya','madam']`);
  console.log("output");
  console.log(palindromesArray);
})(["nitin", "malayalam", "suriya", "madam"]);

//if forward & backward of sentence is same result will be true.
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

//6) Return median of two sorted arrays of the same size.

(function median(a, b) {
  let concat = [...a, ...b];
  let result = [];
  let length = concat.length;
  if (length % 2 == 0) {
    result.push(concat[length / 2 - 1], concat[length / 2]);
  } else {
    result.push(concat[Math.floor(length / 2)]);
  }
  console.log("Return median of two sorted arrays of the same size.");
  console.log(`input a=[1,2,3,4]; b=[5,6,7,8];`);
  console.log("output");
  console.log(result);
})([1, 2, 3, 4], [5, 6, 7, 8]);

//if input total length  is even will return median as two dight, if oreturn one dight
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// 7) Remove duplicates from an array
// method 1: by indexof
(function indexMethod(arr) {
  let unique = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  console.log("Remove duplicates from an array method one using indexof");
  console.log(`input arr = [1, 2, 2, 3, 4, 4, 5]`);
  console.log("output");
  console.log(unique);
})([1, 2, 2, 3, 4, 4, 5]);

//output will be [ 1, 2, 3, 4, 5 ]
console.log(`----------------------------------------------------`);

// method 2: by using set

(function setMethod(arr) {
  console.log("Remove duplicates from an array method two using set");
  console.log(`input arr = [1, 2, 2, 3, 4, 4, 5]`);
  console.log("output");
  console.log([...new Set(arr)]);
})([1, 2, 2, 3, 4, 4, 5]);

//output will be [ 1, 2, 3, 4, 5 ]
console.log(`----------------------------------------------------`);

/*-----------------------------------------------------*/

// 8) Rotate an array by k times

(function arrayRotation(a, b) {
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
  console.log("Rotate an array by k times");
  console.log(`input arry=[1,2,3,4,5]; k=3;`);
  console.log("output");
  console.log(a);
})([1, 2, 3, 4, 5], 3);

// output will be array with k times rotated

/*-----------------------------------------------------*/
