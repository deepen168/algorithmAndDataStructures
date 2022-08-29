/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 */
function containerWithMostWater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let max = 0;

  while (left < right) {
    let volume = Math.min(arr[left], arr[right]) * (right - left);
    max = Math.max(volume, max);
    arr[left] < arr[right] ? left++ : right--;
  }

  return max;
}
// ******** ITERATIVE SOLUTION *********
// function containerWithMostWater(arr) {
//   let maxArea = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       const minHeight = Math.min(arr[i], arr[j]);
//       maxArea = Math.max(minHeight * (j - i), maxArea);
//     }
//   }
//   return maxArea;
// }

module.exports = containerWithMostWater;
