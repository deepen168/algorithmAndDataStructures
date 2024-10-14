/* For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters. */

// Example usage:
console.log(gcdOfStrings("ABCABC", "ABC"));    // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB"));   // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE"));     // Output: ""

/*
note: 
    1st solution focuses on shrinking window on the smaller string to find any potential repeatable strings in both str1 and str2
    2nd solution uses Euclidean algorithm to find the greatest common divisor of the lengths of the two strings and then checks if 
        the candidate string is a repeatable string in both str1 and str2
*/


function isRepeat(str1, candidate) {
    if(str1.length % candidate.length !== 0) return false;
    const divisor = str1.length/ candidate.length;
    return candidate.repeat(divisor) === str1;
}


function gcdOfStrings(str1, str2) {
    const start = 0;
    let end = str2.length;
    while(end > start) {
        const candidate = str2.slice(start, end);
        if(isRepeat(str1, candidate)) {
            return candidate;
        }
        end--;
    }

    return ""
}
 
/*********************** Euclidean algorithm ************/
// function gcd(a, b) {
//     while (b) {
//         [a, b] = [b, a % b];
//     }
//     return a;
// }

// function gcdOfStrings(str1, str2) {
//     const len1 = str1.length;
//     const len2 = str2.length;
    
//     const gcdLength = gcd(len1, len2);
//     const candidate = str1.slice(0, gcdLength);
    
//     if (candidate.repeat(len1 / gcdLength) === str1 && candidate.repeat(len2 / gcdLength) === str2) {
//         return candidate;
//     } else {
//         return "";
//     }
// }


