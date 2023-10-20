/* Queues */

// Arrays: Operations of queues are costly through arrays as we have to shift all the indices while enqueueing or dequeueing
// Linked List: Operations are comparatively faster at insertion and deletion

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue (value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }

    peek () { 
        return this.first;
    }

    dequeue () {
        if (!this.first ) return null;
        if (this.first === this.last) {
            this.last = null
        }

        this.first = this.first.next;
        this.length--;
        return this;
    }
}

  
const queue = new Queue();

queue.enqueue("IELTS")
console.log(queue.peek());
queue.enqueue("PTE")
console.log(queue.peek());
queue.enqueue("DUOLINGO")
console.log(queue.peek());

queue.dequeue()
console.log(queue.peek());

console.log(queue);