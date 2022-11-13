function threeSum(nums) {
  const len = nums.length;
  let res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = len - 1;

    while (l < r) {
      if (nums[i] + nums[l] + nums[r] < 0) {
        l++;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);

        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;

        l++;
        r--;
      }
    }
  }
  return res;
}

module.exports = threeSum;
