const fruits = ["apple", "banana", "cherry", "oranges", "grapes", "tomato"]


// O(1) = Constant Time complexity
// No matter the length of the array, we only do one thing (operation)
// Excellent complexity
// Parallel to x axis graph line

function printTomato(arr) {
    console.log(arr[5]); // O(1)
    console.log(arr[4]); // O(1)
    console.log(arr[3]); // O(1)
    console.log(arr[2]); // O(1)
    console.log(arr[1]); // O(1)
    // sum of all O(1) = O(5) roud up to O(1) eventually
}

printTomato(fruits)
// console.log(fruits);