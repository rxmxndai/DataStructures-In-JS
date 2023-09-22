const names = [ "apple", "pie", "nemo" ]


function findNemo(arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === "nemo") return `Nemo found at Index: ${i}`
    }
}

console.log(findNemo(names));