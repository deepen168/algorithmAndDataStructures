var removeDuplicates = function(nums) {
    
    let counter = 1;
    
    // if(!nums[0]) return [];
    
    // if(nums.length === 1) return nums;
    
    for(let num = 1; num < nums.length; num++){
        if(nums[num] !== nums[num-1]){
            nums[counter] = nums[num];
            counter++;
        }
    }
    
    nums.splice(counter, nums.length);

    return nums.length;
};

let x = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(x);