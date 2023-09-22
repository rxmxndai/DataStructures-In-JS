const veggies = ["cabbage", "lettuce", "onions", "raddish"]

// O(n^2) Quadratic time complexity
// NESTED LOOPS making it slower 
// The graph is quadratic 


function printPairs(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<=i; j++) {
            console.log(`${arr[i]} + ${arr[j]}`);
        }
        console.log(" --------------------------- ");
    }
}

printPairs(veggies)