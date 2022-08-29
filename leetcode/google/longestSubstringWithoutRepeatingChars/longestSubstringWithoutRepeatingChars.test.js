const longestSubstringWithoutRepeatingChars = require("./longestSubstringWithoutRepeatingChars.js");

test("check if solution works", () => {
  expect(longestSubstringWithoutRepeatingChars("abcabcbb")).toEqual(3);
});
test("check if solution works", () => {
  expect(longestSubstringWithoutRepeatingChars("bbbbb")).toEqual(1);
});
test("check if solution works", () => {
  expect(longestSubstringWithoutRepeatingChars("dvdf")).toEqual(3);
});
test("check if solution works", () => {
  expect(longestSubstringWithoutRepeatingChars("pwwkew")).toEqual(3);
});
