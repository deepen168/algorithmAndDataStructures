const containerWithMostWater = require("./containerWithMostWater.js");

test("check if solution works", () => {
  expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
});
test("check if solution works", () => {
  expect(containerWithMostWater([1, 1])).toEqual(1);
});
