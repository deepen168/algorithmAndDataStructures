const lienseKeyFormatting = require('./lienseKeyFormatting.js');

test('check if solution works', () => {
    expect(lienseKeyFormatting("5F3Z-2e-9-w", 4)).toEqual("5F3Z-2E9W");
});

test('check if solution works', () => {
    expect(lienseKeyFormatting("2-5g-3-J", 2)).toEqual("2-5G-3J");
});