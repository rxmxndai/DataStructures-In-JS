// Strings -> implement as array ~split()



let str = "Abra Ka Dabra"

console.log("Str: ", str);
console.log("Str length: ", str.length);
console.log("Str type: ", typeof str);

const iterator = str[Symbol.iterator]();
console.log("Str Iterator: ", iterator);
console.log("Str iterator next: ", iterator.next());
console.log("Str iterator next: ", iterator.next());
console.log("Str iterator next: ", iterator.next());
console.log("Str iterator next: ", iterator.next());

console.log("Str At 2: ", str.at(2));
console.log("Str Char At 2: ", str.charAt(2));
console.log("Str Code At 2: ", str.charCodeAt(2));

const str2 = str.concat(" ", "Shooo!");
console.log("Str2 concat: ", str2); // returns new concated string
console.log("Str2: ", str2);
console.log("Str2 endsWith: ", str2.endsWith("Shooo!"));


console.log("Str includes? : ", str.includes("abra")); // case insensetive
// IndexOf returns index of first occurence of the same word || Case sensetivce 
str = str.toLowerCase();
console.log("Str IndexOf abra: ", str.indexOf("abra")); 
console.log("Str Last IndexOf abra: ", str.lastIndexOf("abra")); 



// match string against the regex expression
const regex = /[a-z]/g;
const found = str.match(regex);
console.log("Str match with uppercase A-Z: ", found);


// normalize -> returns the unicode Normalization Form of the string
const norm = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065'
console.log("Unicode Normalization: ", norm.normalize());

// padEnd() Length + padsize (13 + 2"."s)
console.log("Str Padding end: ", str.padEnd(15, "."));
console.log("Str Padding Front: ", str.padStart(15, "."));


// Escape backslash [\] in string using raw()
const filePath = String.raw`D:\Media\Master the Coding Interview DSA JS\08 - Data Structures Linked Lists`
console.log("FilePath: ", filePath);

console.log("Repeat: ", "Good Morning! ".repeat(2));

console.log("Replace: ", str.replace("abra", "Abra"));  // returns new modified string
console.log("Replace All: ", str.replaceAll("abra", "Abra"));  // returns new modified string

// slice
console.log("Sliced STR: ", str.slice(5, 7)); // new str (indexFrom, indexTo)
// split ( ) param = divider character
console.log("Split: ", str.split(" "));
console.log("Sub String: ", str.substring(0, 4));
// remove unwanted whitespace on either sides
const myStr = " Ohaayo  Gozaimash     "
console.log("String: ", myStr, " Length: ", myStr.length);
console.log("String trimmed: ", myStr.trim(), " Length: ",  myStr.trim().length);


const strObj = new String("Applrue")
console.log("Str Object: ", strObj);
console.log("Value of teh str Object: ", strObj.valueOf());