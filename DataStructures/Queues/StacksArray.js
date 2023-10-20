/* Stacks */

// Track history
// Arrays: Easy to access on memory
// Linked List: Takes a lot of memory


class Stack {
    constructor () {
        this.arr = new Array()
        this.length = 0;
    }


    peek () {
        return this.arr[this.length - 1];
    }

    push (value) {
       this.arr.push(value)
       this.length++;
       return this;
    }

    pop () {
        this.arr.pop()
        this.length--;
        return this
    }
}

 
const myStack = new Stack()

console.log(myStack.push("Facebook"));
console.log(myStack.push("Youtube"));
console.log(myStack.push("Instagram"));

console.log("Length of the stack: ", myStack.length);
// console.log("Peek: ", myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log("Length of the stack: ", myStack.length);