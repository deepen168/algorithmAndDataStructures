// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const most = { char: '', value: 0 };
  str.split('').reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 0;
    }
    acc[char]++;
    if (acc[char] > most.value) {
      most.char = char;
      most.value = acc[char];
    }
    return acc;
  }, {})
  return most.char;
}

// function maxChar(str) {

//   let count = {};
//   let strReturn = '';
//   let max = 0;

//   for(let char of str){
//       if(!count[char]){
//           count[char] = 1;
//       }else{
//           count[char]++;
//       }
//   }

//   for(let val in count){
//       if(count[val] > max ){
//           strReturn = val;
//           max = count[val];
//       }
//   }
  
//   return strReturn;
// }

module.exports = maxChar;
