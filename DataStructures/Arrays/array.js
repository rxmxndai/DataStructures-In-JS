// Arrays
// Stored in contigious memory / smallest footprint among the data structures
// Itterable - Indexed

const vow = ["a", "e"]
const strings = ["a", "b", "c", "d"]
            //   [0]  [1]  [2]  [3]
// 5 items 4 shells on 32 bit = 20 bytes of storage

// push - O(1)
strings.push("e")
strings.push("f")

// pop - O(1)
strings.pop()

// unshift - O(n)
strings.unshift("x")

// splice - O(n)
strings.splice(3, 0, "z")

// console.log(strings);


// at()
// console.log(strings.at(-1));

// concat() 
const mix = vow.concat(strings)
// console.log(mix);

// entries() - returns iterator  - access by: iterator.next().value
const itr = strings.entries()
// console.log(itr.next().value);
// console.log(itr.next().value); // likewise

// every() - if every element passes 
// console.log(vow.every(v => v != 1));

// fill()
// console.log([1, 2, 3, 4].fill("apple"));

// filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// console.log(words.filter(word => word.length > 6));

// find()
// console.log(words.find(wrd => wrd === "spray"));

// findIndex()
// console.log(words.findIndex(wrd => wrd === "destruction"));

// flat() Flattens 1st layer only - new Array
const how = [0, 1, 2, [[3], 4]];
// console.log(how.flat());

// flatMap() - newArray flat + map the callback
console.log(how.flatMap(h => h === 3));
console.log(how);


