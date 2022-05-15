// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, str = '') {

    if (n === row) {
        return;
    }

    if (str.length === n){
        console.log(str);
        return steps(n, row + 1);
    }

    const add = str.length <= row ? '#' : ' ';

    steps(n, row, str + add);

}


// function steps(n) {
    
//     for (let row = 0; row < n; row++){
//         let stair = '';
//         for(let column = 0; column<n; column++){
//             if(row >= column){
//                 stair += '#';
//             }else{
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

module.exports = steps;