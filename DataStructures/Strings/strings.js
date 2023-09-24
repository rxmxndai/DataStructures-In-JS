// Strings -> implement as array ~split()



// reverse string
function reverseStr (str) {
    if (!str || str.length < 2 || typeof str !== "string") {
        return `Needs a valid string!`
    }
    let end = str.length - 1;
    let result=""
    while (end >= 0) {
        console.log(result);
        result += (str[end])
        end--;
    }
    return result;
}


function reverseStr2 (str) {
    return str.split("").reverse().join("")
}


const reverseStr3 = str => [...str].reverse().join("")

const stt = "sasd asda sdd1e sadjiouhg OIJ"
console.log([...stt].reverse().join(""));

console.log(reverseStr3("NAMOR"))