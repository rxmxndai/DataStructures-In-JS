// Space Complexity

// Heap : Store variables / data
// Stack : Keep track of the functions call

// O(1)
function ohOne(n) {
    for (let i=0; i<n; i++) {
        console.log("Oh-One");
    }
}

ohOne(3);

// O(n)
function ohhN(n) {
    let arr = []
    for (let i=0; i<n; i++) {
        // uses memory space for each element
        arr[i] = "Oh-N"
    }
    console.log(arr);
}
ohhN(3);


//JS has built in property of string length
"asdhadgbaskujdhbgvdjikahvdb".length // O(1)
 
