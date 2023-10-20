/* Stacks */

// Track history
// Arrays: Easy to access on memory
// Linked List: Takes a lot of memory

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor () {
        this.top = null
        this.bottom = null
        this.length = 0
    }


    peek () {
        return this.top;
    }

    push (value) {
        const node = new Node(value)
        if (this.length === 0 ) {
            this.top = node;
            this.bottom = node;
        } else {
            const prevTop = this.top
            this.top = node;
            this.top.next = prevTop
        }
        this.length++;
        return this;
    }

    pop () {
        if (!this.top) return null;

        if (this.top === this.bottom) {
            this.bottom = null;
        }
        
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

 
const myStack = new Stack()

myStack.push("Facebook")
myStack.push("Youtube")
myStack.push("Instagram")

console.log("Length of the stack: ", myStack.length);
console.log("Peek: ", myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log("Length of the stack: ", myStack.length);
console.log("Length of the stack: ", myStack.top);