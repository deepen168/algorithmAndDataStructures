// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i) => {
       return char === str[str.length - i - 1];
    });
}

palindrome('aba');
module.exports = palindrome;

/* *********************************************** */

// function palindrome(str) {
//     var reverse = str.split('').reverse().join('');
//     return str === reverse;
// }

/* *********************************************** */

// function palindrome(str) {
//     return (str == reverseString(str)) ? true : false;
// }
// function reverseString(str){
//     return str.split('').reduce((rev,str) => str + rev, '');
// }
