/* Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

// ****** Sliding windlow with array ********
function longestSubstringWithoutRepeatingChars(str) {
  let store = [];
  let left = 0;
  let right = 0;
  let longestSubstr = 0;

  while (right < str.length) {
    if (store.indexOf(str[right]) == -1) {
      store.push(str[right]);
      longestSubstr = Math.max(longestSubstr, store.length);
      right++;
    } else {
      store = store.filter((val) => val !== str[left]);
      left++;
    }
  }

  return longestSubstr;
}

// ****** Sliding windlow with set ********
// function longestSubstringWithoutRepeatingChars(str) {
//   let set = new Set();
//   let start = 0;
//   let end = 0;
//   let longestSubstr = 0;

//   while (end < str.length) {
//     if (!set.has(str[end])) {
//       set.add(str[end]);
//       longestSubstr = Math.max(longestSubstr, set.size);
//       end++;
//     } else {
//       set.delete(str[start]);
//       start++;
//     }
//   }

//   return longestSubstr;
// }

module.exports = longestSubstringWithoutRepeatingChars;

// ******* ITERATIVE SOLUTION *******
// function longestSubstringWithoutRepeatingChars(str) {
//   let lastStartedIndex = 0;
//   let longestSubstring = "";
//   let currentSubstring = "";

//   while (lastStartedIndex < str.length) {
//     let substrArr = str.substring(lastStartedIndex).split("");
//     for (let char of substrArr) {
//       if (currentSubstring.includes(char)) {
//         if (currentSubstring.length > longestSubstring.length) {
//           longestSubstring = currentSubstring;
//         }
//         currentSubstring = "";
//         break;
//       }
//       currentSubstring += char;
//     }
//     lastStartedIndex++;
//   }

//   return longestSubstring.length > currentSubstring.length
//     ? longestSubstring.length
//     : currentSubstring.length;
// }
