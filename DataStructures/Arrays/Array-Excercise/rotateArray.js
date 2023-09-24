// Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

const nums = [1, 2], k = 3;


const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
}

const rotateArray = function(arr, k) {

    const reverse = (start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++;
            end--;
        }
    }

    const idx = k % arr.length;

    reverse(0, arr.length-1);

    reverse(0, idx-1)

    reverse(idx, arr.length-1)
};



rotateArray(nums, k)
console.log(nums);











// const rotateArray = function(arr, n) {
//     for (let i=0; i< n; i++) {
//         let temp = arr.pop();
//         arr.unshift(temp);
//     }
//     console.log(arr);
// };