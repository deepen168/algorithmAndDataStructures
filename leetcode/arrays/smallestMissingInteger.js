// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1



function firstMissingPositive(nums) {

    nums = nums.sort((a,b) => a - b);

    nums = nums.filter((num) => num > 0);

    if (nums.length < 2) {
        if (nums.length == 0) return 1;
        if (nums.length == 1) {
            if(nums[0] === 1) return 2;
            else return 1;
        }
    }

    if (nums[0] > 1) return 1;

    for(let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 1) return nums[i - 1] + 1;
    }

    return nums[nums.length - 1] + 1;
 };


// [2] = 1
// [-5] = 1
// [-1,-2] = 1
// [1000,-1] = 1
// [1,2,0] = 3
// [-1,-2,-60,40,43] = 1

// 80ms leetcode solution
// var firstMissingPositive = function(nums) {
//     for (let i = 0; i < nums.length; i++){
//         let cur = nums[i];
//         while (cur > 0 && cur <= nums.length && nums[cur-1] != cur){
//             let t = nums[cur-1];
//             nums[cur-1] = cur;
//             cur = t;
//         }
//     }
    
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] != i + 1){
//             return i + 1;
//         }
//     }
    
//     return nums.length + 1;
// };

// 55900kb Leetcode solution
// var firstMissingPositive = function(nums) {
//     for (let i = 0; i < nums.length; ++i) {
//         let v = nums[i];
//         while (v > 0 && v <= nums.length && v !== nums[v-1]) {
//             const temp = nums[v-1];
//             nums[v - 1] = v;
//             v = temp;
//         }
//     }
    
//     //console.log(nums);
//     for (let i = 0; i < nums.length; ++i) {
//         if (nums[i] !== i+1)
//             return i+1;
//     }
        
//     return nums.length + 1; 
// };

// Failed solution
// function firstMissingPositive(nums) {
//     nums = nums.sort((a,b) => a-b);
//     if(nums.length == 0) return 0;
//     if(nums.length == 1 ) {
//         if (nums[0] == 1) return 2;
//         if (nums[0] > 1) return 1;
//         if (nums[0] < 1) return 1;
//     }
//     if(nums[nums.length - 1] < 1 || nums[0] > 1) return 1;
//     for(let i = 1; i < nums.length; i++){
//         if(nums[i] < 0) continue;
//         if(nums[i] - nums[i - 1] > 1 ) {
//             return nums[i] + 1;
//         }
//     }
//     return nums[nums.length - 1 ] + 1;
// };