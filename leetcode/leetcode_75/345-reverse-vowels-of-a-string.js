/**
 * Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/



var reverseVowels = function(s) {
    const vowelIndexes = [];
    const reversedVowels = [];
    for(let i = 0; i < s.length; i++) {
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(s[i])){
            vowelIndexes.push(i);
            reversedVowels.push(s[i]);
        }
    }

    return s.split('').map((val) => {
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(val)) {
            return reversedVowels.pop();
        }
        return val;
    }).join('');
};


console.log(reverseVowels('IceCreAm')); // "AceCreIm"
console.log(reverseVowels('leetcode')); // "leotcede"