// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//Reduce helper method was introduced in ES5
//second argument is for initial value for first argument of callbaack function
return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;


/* *********************************************** */

// function reverse(str) {
//     var final = '';
//     for(char of str ){
//         final = char + final;
//     }
//     return final;
// }

/* *********************************************** */

// function reverse(str) {
//     var final = '';
//     for(let i = str.length; i > 0; i-- ){
//         final += str.charAt(i-1);
//     }
//     return final;
// }

/* *********************************************** */

// function reverse(str) {
//     return str.split('').reverse().join('');
// }