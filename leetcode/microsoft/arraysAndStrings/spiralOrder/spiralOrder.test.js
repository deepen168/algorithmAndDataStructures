const spiralOrder = require('./spiralOrder.js');

const input = [[1,2,3],[4,5,6],[7,8,9]];
const resultVal = [1,2,3,6,9,8,7,4,5];

test('check if solution works', () => {
    expect(spiralOrder(input)).toEqual(resultVal);
});