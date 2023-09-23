const names = ["apple", "pie", "nemo"]


function findNemo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "nemo") return `Nemo found at Index: ${i}`
    }
}

console.log(findNemo(names));


const arr1 = [1, 2, 3, 9]
const arr2 = [1, 2, 4, 4]




function findPair(arr, sum) {
    let temp = []

    for (let x of arr) {
        if (temp.includes(x)) return true;
        else {
            temp.push(sum - x);
        }
    }
    console.log(temp);
    return false;
}
console.log(findPair(arr2, 8));