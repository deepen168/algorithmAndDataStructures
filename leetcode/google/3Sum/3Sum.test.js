const threeSum = require("./3Sum.js");

const ifArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1 = arr1.map((elemArr) => JSON.stringify(elemArr.sort((a, b) => a - b)));
  arr2 = arr2.map((elemArr) => JSON.stringify(elemArr.sort((a, b) => a - b)));

  for (let elem of arr1) {
    if (arr2.indexOf(elem) === -1) {
      return false;
    }
  }

  return true;
};

test("check if solution works", () => {
  let input = threeSum([-1, 0, 1, 2, -1, -4]);
  let output = [
    [-1, 0, 1],
    [-1, -1, 2],
  ];

  expect(ifArraysEqual(input, output)).toBeTruthy();
});
test("check if solution works", () => {
  let input = threeSum([0, 1, 1]);
  let output = [];

  expect(ifArraysEqual(input, output)).toBeTruthy();
});
test("check if solution works", () => {
  let input = threeSum([0, 0, 0]);
  let output = [[0, 0, 0]];

  expect(ifArraysEqual(input, output)).toBeTruthy();
});
