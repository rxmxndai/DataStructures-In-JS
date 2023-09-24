// Given an integer array nums, find the subarray with the largest sum, and return its sum.

const nums = [-2,1,-3,4,-1,2,1,-5,4]
// const nums = [1, 2, 3, 4, -25, 6, 7, 8]

const maxSumArray2 = (arr) => {
    
    let maxSum = -Infinity;

    for (let i=0; i< arr.length; i++) {
        let tempSum = 0;
        for (let j=i; j< arr.length; j++) {
            tempSum += arr[j];
            if (tempSum > maxSum) maxSum = tempSum;
        }
    }
    return maxSum;
}


// KADANE'S ALGORITHM - RESET THE GREEDY PART
function maxSumArray(arr) {
    if (arr.length === 0) {
      return 0; 
    }

    let max = 0;
    let sum = 0;

    for (let i=0; i<arr.length; i++) {
        sum = Math.max(sum, 0); // reset to 0 if negative
        // now-on sum is either 0 orpositive sum of numbers behind
        sum += arr[i] // continue adding the numbers

        // console.log("Max : ", max, "  Sum: ", sum);
        max = Math.max(sum, max);
    }


    return max;
  }


console.log(maxSumArray(nums));