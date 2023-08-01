/* 1. Print 1 - 135

Write a program using JavaScript that will print all the numbers from 1 to 135.*/
//print from 1 to 135
//use for loop to print each number
//console log the solution

/* for(let i = 1; i <= 135; i++){
  console.log(i)
} */


/* 2. Print Odd Numbers 1 - 135

Write a program using JavaScript that will print all the odd numbers from 1 to 135. */

//create for loop condition for odd numbers
//console log the solution

/* for (let i = 1; i <= 135; i = i + 2) {
  console.log(i);
} */


/* 3. Sum of Printed Numbers

Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

Number is: 0 Sum: 0

Number is: 1 Sum: 1

Number is: 2 Sum: 3

Number is: 3 Sum: 6

You are NOT allowed to use an array to solve this exercise. */

//print numbers and the sum of the numbers form 1 to 135
//create a variable outside of the for loop to accept the sum 
//do the sum operation inside the for loop
//console log the string with printed numbers

/* let x = 0;
for(y = 0; y <= 135; y++){
  x = x + y;
  console.log('Number is: ' + y + ' Sum: ' + x);
} */


/* 4. Print the elements of an array

Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes. */
//initialize an array x
//for loop through the array
//print each number to the screen

/* const x = [1,4,2,12];
for (i = 0; i < x.length; i++) {
  console.log(x[i]);
} */


/* 5. Find Max

Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero. */

//create a function that has as array as an argument
// create a var theMax to accept hightest temporary number, = 0
//loop through the array 
//compare each number with the var theMax
//if number is > theMax
//change the value of theMax with new number
//return theMax

/* function getMax(arr) {
  let theMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > theMax){
      theMax = arr[i];
    } 
  }
  console.log(theMax);
}

getMax([100, 2, -3, 200, -1]); */


/* 6. Get Average

Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2. */

//create a function that has as array as an argument
// create a var theAvr = 0 inside the function to hold the sum of elements
//loop through the array
// we need to find sum and divide sum by total number of elements(its length)
//return theAvr 

/* function calcAvr(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length
}
console.log(calcAvr([2,1,3])) */


/* 7. Eliminate the Negatives

Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0]. */

//initiate a function with an array as an argument
//loop through the array
//select the negative numbers
//push 0 instead of negative numbers

/* function elimination(arr, currentIndex = 0) {
  if (currentIndex >= arr.length) return arr;
  if (arr[currentIndex] < 0) arr[currentIndex] = 0;
  return elimination(arr, currentIndex+1);
}

console.log(elimination([2,-1,4,-3])); */

//other way 
/* const y = [2,-1,4,-3];
const z = y.map(num => num < 0 ? 0 : num).join(',');
console.log(z); */

/* 8. Number to String

Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing']. */

/* let arr = [0,-2,-1,34,10,12];
for (let i = 0; i < arr.length; i++){
    if(arr[i] < 0) {
        arr[i] = 'Turing';
    }
}
console.log(arr) */