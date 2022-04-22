// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109


function longestConsecutive(nums) {
        
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;

    let longestConsecutiveSequenceNumber = [[]];
    let indexOfElement = 0;
    let maxLength = 0;
            
    nums = nums.sort((a,b) => a-b);
    noDuplicateNums = [];
    noDuplicateNums.push(nums[0]);

    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] !== nums[i]) {
            noDuplicateNums.push(nums[i]);
        }
    }

    longestConsecutiveSequenceNumber[0].push(noDuplicateNums[0]);
    
    for(let i = 1; i < noDuplicateNums.length; i++) {
        if(noDuplicateNums[i-1] + 1 !== noDuplicateNums[i]) {
            indexOfElement++;
            longestConsecutiveSequenceNumber.push([]);
        }
        longestConsecutiveSequenceNumber[indexOfElement].push(noDuplicateNums[i]);
    }
    
    longestConsecutiveSequenceNumber.forEach((seq) => {
        if (seq.length > maxLength) {
            maxLength = seq.length;
        };
    });
    
    return maxLength;
};



// 64ms Leetcode solution
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var longestConsecutive = function(nums) {
//     var numSet = new Set();
    
    
//     for(let i = 0; i < nums.length; i++){
//         numSet.add(nums[i]);
//     }
    
//     var longStrk = 0;
    
//     for(let num of numSet){
//         if(!numSet.has(num - 1)){
           
//             var currNum = num;
//             var currStrk = 1;
            
//             while (numSet.has(currNum + 1)){
//                 //console.log(currNum);
//                 currNum++;
//                 currStrk++;
//             }
            
//             longStrk = Math.max(currStrk, longStrk);
//         }
//     }
    
//     return longStrk;
    
//     //Time Complexity: O(n)
//     //Space Complexity: O(n)
// };

// 42700 kb Leetcode solution


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var longestConsecutive = function(nums) {
//     nums.sort((a, b) => a - b);
    
//     let longest = 0;
//     let currLen = 1;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i + 1] === nums[i] + 1) {
//             currLen++
//         } else if (nums[i + 1] === nums[i]) {
//             continue;
//         } else {
//             currLen = 1
//         }
        
//         longest = Math.max(longest, currLen)
//     }
    
//     return longest
// };