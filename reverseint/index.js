// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    if (n >= 0){
        let values = createReverse(n);
        return values[0] + values[1];
    }else{
        let newN = (n)-(n*2);
        let positiveValue = createReverse(newN)[0] + createReverse(newN)[1];
        return positiveValue - (positiveValue * 2);
    }
}

function createReverse(n){
    let newNumber = n;
    let finalNumber = 0;
    let modulo;
    while (newNumber > 10){
        modulo = newNumber % 10;
        finalNumber = (finalNumber + modulo) * 10;
        newNumber = (newNumber - modulo) / 10;
    }
    return [finalNumber, newNumber];
}

module.exports = reverseInt;
