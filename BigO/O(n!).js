// O(n!) Factorial time complexity [BigOh-No]
// The most expensive and steepiest graph time
// Never make program with such complexity :)
// Most expensive time complexity


// Often seen in recursion
// Loop for every elemnt we iterate over

const numbers = [1, 2, 3, 4, 5]


for (let x of numbers) {
    for (let i=0; i<x; i++) {
        console.log(`${x} value ${numbers[i]}`);
    }
}