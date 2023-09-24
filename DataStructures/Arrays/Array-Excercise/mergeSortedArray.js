
const num1 = [1, 7, 9, 11]
const num2 = [4, 5, 6, 8, 10, 12, 13, 14]


const mergeSortedArrays = (arr1, arr2) => {
    let result = [];
  
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [null];
  
    if (arr1.length === 0) return arr2;
    else if (arr2.length === 0) return arr1;
  
    let i = 0;
    let j = 0;
  
    while (i < arr1.length || j < arr2.length) {
      if (arr1[i] < arr2[j] || arr2[j] === undefined) {
        result.push(arr1[i++]);
      } else if (arr2[j] < arr1[i] || arr1[i] === undefined) {
        result.push(arr2[j++]); 
      }
    }
  
    return result;
  };
  

console.log(mergeSortedArrays(num1, num2));