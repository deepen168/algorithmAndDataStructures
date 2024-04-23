// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


/* 
Watchout:
    Check if the length of both string and take the greater one
    use regex to search or replace non-letters or numbers 
*/

function anagrams(stringA, stringB) {
    const countStrA = countChars(stringA);
    const countStrB = countChars(stringB);

    // Check which object has more values to make sure all the characters are covered
    const objectToIterage = Object.keys(countStrA).length > Object.keys(countStrB) ? countStrA : countStrB;

    // Compare objects
    for(let charA in objectToIterage) {
        if(!countStrB[charA] || countStrA[charA] !== countStrB[charA]) {
            return false;
        }
    }
    return true;
}


const countChars = (str) => {
    const countMap = {};
    for (let char of str) {
        // Match any letters or numbers
        if (char.match(/[a-zA-Z0-9]/)) {
            if (!countMap[char]) {
                countMap[char] = 0;
            }
            countMap[char]++;
        }
    }
    return countMap;
}

module.exports = anagrams;