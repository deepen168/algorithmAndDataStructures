/**
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 */

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {

    const reversedStr = reverseStr(s.trim());
    const reversedArr = [];

    let start = 0;
    let end = 0;
    while(end <= reversedStr.length) {
        if(reversedStr[end] === ' ' || end === reversedStr.length) {
            const subString = reverseStr(reversedStr.substring(start, end));
            if (!isEmptyString(subString)) {
                reversedArr.push(subString)
            }
            start = end + 1;
        }
        end++;
    }

    return reversedArr.join(' ');

}

const reverseStr = (s) => {
    let pointer = 0;
    let reversedStr = '';
    while(pointer < s.length) {
        reversedStr = s[pointer] + reversedStr;
        pointer++;
    }

    return reversedStr;
}

const isEmptyString = (s) => {
    let pointer = 0;
    while(s.length > pointer) {
        if(s[pointer] !== ' ') {
            return false;
        }
        pointer++;
    }
    return true;
}



// var reverseWords = function(s) {
//     let finalStr = '';
//     let fast = 0;
//     let slow = 0;

//     s = s.trim();

//     while(fast < s.length){
//         if(s[fast] !== ' ' && s[slow] !== ' ') {
//             fast++;
//         }
//         if(s[slow] !== ' ' && s[fast] === ' ') {
//             finalStr = s.substring(slow, fast) + ' ' + finalStr;
//             fast++
//             slow = fast;
//         }
//         if(s[slow] === ' ' && s[fast] === ' ') {
//             slow++;
//             fast++
//         }
//         if(fast === s.length - 1 ) {
//             finalStr = s.substring(slow, s.length) + ' ' + finalStr;
//         }
//     }

//     return finalStr.trim();
// }


// var reverseWords = function(s) {
//     const finalstr = [];
//     let current = 1;
//     s = s.trim();

//     finalstr.push([s[0]]);

//     while(current < s.length) {
//         if(s[current] !== ' ') {
//             finalstr[0].push(s[current]);
//         }
//         if(finalstr[0].length && s[current] === ' ') {
//             finalstr.unshift([]);
//         }
//         current++;
//     }

//     return finalstr.map((val) => val.join('')).join(' ');
// };


console.log(reverseWords('the sky is blue')); // "blue is sky the"
console.log(reverseWords('  hello world  ')); // "world hello"