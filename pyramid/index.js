// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// use cases: 
//     n=1 -> row = 1 -> column = 1
//     n=2 -> row = 2 -> column = 3
//     n=3 -> row = 3 -> column = 5
//     n=4 -> row = 4 -> column = 7

//       *  
//      ***
//     *****
// psudo:
//     for numbers var n
//     var str = '';
//         for nx2-1 var j
//             var start = Math.floor(n/2);
//             var min = start;
//             var max = start;
//             if str.length > min || str.length < max -> str = str+ '#';
//             else ' '


function pyramid(n, row = 0, str = '') {

    var totalLength = (n*2)-1;
    if(n === row){
        return;
    }

    if(str.length == totalLength){
        console.log(str);
        return pyramid(n, row + 1);
    }

    var min = Math.floor(totalLength/2 - row);
    var max = Math.floor(totalLength/2 + row);

    if(str.length >= min && str.length <= max) {
        str += '#';
        pyramid(n, row, str);
    }else{
        str += ' ';
        pyramid(n, row, str);
    }

}

// function pyramid(n) {
//     const midPoint = Math.floor((n*2-1)/2);
//     let min = midPoint;
//     let max = midPoint;
//     for(var i = 0; i < n; i++){
//         var str = '';
//             for(var j = 0; j < n*2-1; j++){
//                 const add = str.length >= min && str.length <= max ? '#' : ' ';
//                 str = str + add;
//             }
//         min = min - 1;
//         max = max + 1;
//         console.log(str);
//     }
// }
// pyramid(3);

module.exports = pyramid;
