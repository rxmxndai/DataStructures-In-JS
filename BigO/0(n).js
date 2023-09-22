const arr = [1, 2, 3, 4, 5, 6]


// Time Complexity of O(n)
// Where you iterate over each element in the array
// number of operations = or closely = number of inputs (n)
// 45 degree graph line

function printArr(arr) {
    arr.forEach(item => {
        console.log(item);
    })
}   

printArr(arr)