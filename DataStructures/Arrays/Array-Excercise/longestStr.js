// Longest Word

// Have the function LongestWord(sen) take the sen parameter being passed 
// and return the longest word in the string. 
// If there are two or more words that are the same length, 
// return the first word from the string with that length. 
// for example "Hello world123 567"

function LongestWord(sen) { 

    const strArr = Array.from(sen.split(" "))
    // code goes here  
    let count = 0;
    let str = ""
    for (let x of strArr) {
      let cleanedStr = x.replace(/[^a-zA-Z]/g, "");
      if (cleanedStr.length > count) {
        count = cleanedStr.length;
        str = x;
      }
    }
    return str; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord("hero hero#@ hero%x"));