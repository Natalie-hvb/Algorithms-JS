/*
Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

Example:

Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11
*/

function thirdHighestNumber(arr) {
    if(arr.length < 3) {
        console.log('Wrong input, must at least 3 numbers');
        return;
    }
    let first = arr[0];
    for(let a = 0; a < arr.length; a++){
        if(arr[a] > first) {
            first = arr[a];
        }
    }
    let second = 0;
    for(let b = 0; b < arr.length; b++) {
        if(arr[b] > second && arr[b] < first) {
            second = arr[b];
        }
    }
    let third = 0;
    for(let c = 0; c < arr.length; c++) {
        if(arr[c] > third && arr[c] < second) {
            third = arr[c];
            
        }
    }
    console.log('This is the Third largest number -> ' + third);
}
let arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
thirdHighestNumber(arr);