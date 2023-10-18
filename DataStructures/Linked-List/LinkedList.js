// WHat is a linked List?
// Linked List is a linear data structure, in which elements are not stored at a contiguous location, 
// rather they are linked using pointers. Linked List forms a series of connected nodes,
// where each node stores the data and the address of the next node.

//A node in a linked list typically consists of two components DATA and NEXT (pointer to next node)
// HEAD and TAIL

// linkedList : apple[9789] -> [9789]grapes[1442] -> [1442]pears[7678] -> null


// Features
/*
    Fast Insertion and Deletion
    Ordered 
    Flexible Size

    Slow Lookups
    More memory (Light weight)
*/



// 10 --> 5 --> 16

// let myLinkedList = {
//     head: { 
//         value: 10,
//         next:  {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }



/* Doubly Linked List */
// Has an extra property of the node (i.e. previous node pointer)
// The head's previous points to null


// When to use either of them?


// Singly Linked List
// less memory
// a bit faster (less searching and fast insertion and deletion)


// Doubly Linked List
// Can be traversed both ways
// Fairly complex to implement (requires more memory)
// extra operation on insertion and deletion
// good for searching in either direction (back or front)