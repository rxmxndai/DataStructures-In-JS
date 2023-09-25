// HashTable [key: value] pairs
// Named index rather than numbers

// Hash Function ?
// Function that generates a value of fixed length for every input
// One way (indempotent) always same output for same inputs
// Really fast data access 
// insert, lookup, delete, search O(1) Time


let user = { name: "roman", age: 21, magic: true, scream() { console.log("ahhh!"); } }

user.spell = `AbraKa Dabra` // O(1)

console.log(user.age); // O(1)
user.scream() // O(1)


// Cons Collision
// A hashing collision occurs when two different inputs produce the same hash value.
// Collision of keys [more data or not enough memory]
// Slows down the hashing O(n/k)

// Deal collision
// Use linked list
// Open addressing

// Objects has only string as keys

/* Map and Sets */
// 


/* VERSIONS OF HASH TABLES [ES 6] */
// Map: allows to set any datatype as key
// function, arrays etc as keys
// maintains insertion order
const a = new Map();
const b = new Set();


