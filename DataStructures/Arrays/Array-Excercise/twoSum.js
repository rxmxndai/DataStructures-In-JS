// Two Sum 
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


const nums = [3,2,4], target = 6;

const twoSum = function(nums, target) {
    let reserved = []
    for (let i=0; i< nums.length; i++) {
       if (reserved.includes(nums[i])) return [reserved.indexOf(nums[i]), i];
       else reserved.push(target - nums[i])
    }
};


console.log(twoSum(nums, target));
