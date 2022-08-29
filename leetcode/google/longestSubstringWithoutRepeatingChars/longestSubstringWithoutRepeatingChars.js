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

function longestSubstringWithoutRepeatingChars(str) {
  let lastStartedIndex = 0;
  let longestSubstring = "";
  let currentSubstring = "";

  while (lastStartedIndex < str.length) {
    let substrArr = str.substring(lastStartedIndex).split("");
    for (let char of substrArr) {
      if (currentSubstring.includes(char)) {
        if (currentSubstring.length > longestSubstring.length) {
          longestSubstring = currentSubstring;
        }
        currentSubstring = "";
        break;
      }
      currentSubstring += char;
    }
    lastStartedIndex++;
  }

  return longestSubstring.length > currentSubstring.length
    ? longestSubstring.length
    : currentSubstring.length;
}

// function longestSubstringWithoutRepeatingChars(str) {
//   let longestSubstring = "";
//   let currentSubstring = "";

//   str.split("").forEach((currentChar) => {
//     if (currentSubstring.includes(currentChar)) {
//       if (currentSubstring.length > longestSubstring.length) {
//         longestSubstring = currentSubstring;
//       }
//       currentSubstring = "";
//     }
//     currentSubstring += currentChar;
//   });

//   return longestSubstring.length > currentSubstring.length
//     ? longestSubstring.length
//     : currentSubstring.length;
// }

module.exports = longestSubstringWithoutRepeatingChars;
