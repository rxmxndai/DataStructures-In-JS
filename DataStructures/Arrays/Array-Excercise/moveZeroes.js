// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.


const nums = [0, 1, 0, 3, 12];


// double pointers
const moveZeroes = function (arr) {
    let left = 0; 
    let right = 0;

    while (right < arr.length) {
        console.log(arr);
        if (arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++; 
        }
        right++; 
    }
    console.log(arr); 
};


const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
