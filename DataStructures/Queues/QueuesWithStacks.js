


const MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
    this.front = null;
}

// push 
MyQueue.prototype.push = function (value) {
    if (this.stack1.length === 0) {
        this.front = value
    }
    this.stack1.push(value)
}

// peek
MyQueue.prototype.peek = function() {
    return this.stack2.length === 0 ? this.front : this.stack2[this.stack2.length - 1]
}


// empty
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0
}


// pop
MyQueue.prototype.pop = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
}


const q = new MyQueue();

q.push(10)
console.log(q.peek());
console.log(q.empty());
