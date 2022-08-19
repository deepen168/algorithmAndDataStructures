const uniqueEmailAddresses = require('./uniqueEmailAddresses.js');

const input = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];
const resultVal = 2;
test('check if solution works', () => {
    expect(uniqueEmailAddresses(input)).toEqual(resultVal);
});