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

capitalize('hello there');

// function capitalize(str) {
//     let splitStr = str.split(' ');
//     let capitalizedSplit = []
//     for(word of splitStr){
//         capitalizedSplit.push(capitalizeFirstLetter(word));
//     }
//     return capitalizedSplit.join(' ');

// }

// function capitalizeFirstLetter(str){
//     let strArray = str.split('');
//     strArray[0] = strArray[0].toUpperCase();
//     return strArray.join('');
// }

module.exports = capitalize;
