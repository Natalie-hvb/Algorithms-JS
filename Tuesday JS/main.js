/* 1. Addition

Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. */

/* for(i = 200; i <= 2700; i++){
    if ( i % 3 && i % 5) {
        console.log(i);
    }
}; */


/* 2. Shift the Values

Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2]. */

/* const arr = [2,1,6,4,-7];
const rotatedArr = arr.map((e, i) => arr[arr.length-i-1])
console.log(rotatedArr) */


/* 3. FizzBuzz

Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...] */

/* let FizzBuzz = [];
for (let i = 1; i <= 135; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
    FizzBuzz.push("FizzBuzz");
   } else if (i % 3 === 0) {
    FizzBuzz.push("Fizz");
   } else if (i % 5 === 0) {
    FizzBuzz.push("Buzz");
   } else {
    FizzBuzz.push(i);
    }
}
console.log(FizzBuzz); */



/* 4. Fibonacci

For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

0 1 1 2 3 5 8 13 21... */


/* function Fibonacci(limit) {
let fibPrev = 0;
let fibCurrent = 1;

    while (fibCurrent < limit) {
        console.log(fibCurrent);
        const nextFib = fibPrev + fibCurrent;
        fibPrev = fibCurrent;
        fibCurrent = nextFib;
    }
}

const limit = 1000000;
Fibonacci(limit); */
  


/*5. Remove the Negative
Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1]. */

/* function removeNegative(arr) {
    return arr.filter((num) => num >= 0);
}
  
const x = [1, -2, 4, 1];
const result = removeNegative(x);
console.log(result); */

/* 6. Communist Censorship

Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice*/

//Define the input array
// Choose the word to replace
//Create a function to replace a word in the array
//use for loop to iterate over the array and replace a chosen word
//call the function

/* function replaceWord(array, theWord) {
    return array.map((str) => {
      if (str === theWord) {
        return '*'.repeat(str.length);
      } else {
        return str;
      }
    });
}

const x = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
const theWord = 'Program';
const result = replaceWord(x, theWord);
console.log(result); */
