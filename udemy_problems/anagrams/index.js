// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    let objA = buildCharMap(stringA);
    let objB = buildCharMap(stringB);

if(Object.keys(objA).length != Object.keys(objB).length){
    return false;
}

return compareMap(objA, objB);
}

function compareMap(objA, objB){

    for(char in objA){
        if (objA[char] !== objB[char]) {
            return false;
        } 
    }
    return true;
}

function buildCharMap(str) {
    let charMap = {};
    let charStr = str.toLowerCase().replace(/[^\w]/g, '');
    for(let val of charStr){
        if(!charMap[val]) {
            charMap[val] = 1;
        } else {
            charMap[val]++;
        }
    }
    return charMap;
}

// function anagrams(stringA, stringB) {
//     let sortedStrA = stringA.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
//     let sortedStrB = stringB.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');

//     return sortedStrA === sortedStrB;
// }

module.exports = anagrams;