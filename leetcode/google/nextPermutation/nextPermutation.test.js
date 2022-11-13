const nextPermutation = require("./nextPermutation.js");

test("check if solution works", () => {
  expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
});
test("check if solution works", () => {
  expect(nextPermutation([3, 2, 1])).toEqual([1, 2, 3]);
});
test("check if solution works", () => {
  expect(nextPermutation([1, 1, 5])).toEqual([1, 5, 1]);
});
