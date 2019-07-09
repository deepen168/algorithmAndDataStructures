// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Memoization function

function memoize(fn) {
    
    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}
function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

fib = memoize(fib);

fib(15);

// Explonential solution

// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n-1) + fib(n-2);
// }


//  My recursion

// function fib(n, result = [0, 1]) {
    
//     if(result.length-1 === n){
//         return result[n];
//     }

//     const resLen = result.length;
//     const a = result[resLen-1];
//     const b = result[resLen-2];
//     result.push(a+b);
//     return fib(n, result);
// }


// function fib(n) {
    
//     let result = [0, 1];

//     for( let i = 2; i <= n; i++ ) {
//         const a = result[i-1];
//         const b = result[i-2];
//         result.push(a+b);
//     }
//     return result[n];
// }

// function fib(n) {

//     let holderNum = 0;
//     let lastNum = 1;
//     let secondLstNum = 0;
//     for( let i = 0; i < n-1; i++ ) {
//         holderNum = lastNum;
//         lastNum = secondLstNum + lastNum;
//         secondLstNum = holderNum;
//     }
//     return lastNum;
// }

module.exports = fib;
