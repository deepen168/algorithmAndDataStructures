// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let finalStr = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++ ){
        if (str[i-1] == ' '){
            finalStr += str[i].toUpperCase();
        }else{
            finalStr += str[i];
        }
    }

    return finalStr;
}

// function capitalize(str) {
//     const strArr = str.split('');
//     strArr[0] = strArr[0].toUpperCase();
//     let next = false;
//     let i = 0;

//     while(i < strArr.length) {
//         if(strArr[i] === ' ') {
//             next = true;
//         } else if(next === true) {
//             next = false;
//             strArr[i] = strArr[i].toUpperCase();
//         }
//         i++;
//     }

//     return strArr.join('');
// }

module.exports = capitalize;
