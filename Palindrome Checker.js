/*
Check for Palindromes
Declare a function isPalindrome(str) that takes a string as an input.

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('');
    if(str === reverseStr){
        console.log('It is a Palindrome');
    }else{
        console.log('It is not a Palindrome')
    }
}
isPalindrome('kayak')

