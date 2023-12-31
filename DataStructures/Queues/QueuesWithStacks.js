
// use two arrays as stacks
var MyQueue = function() {
    this.firstStack = []
    this.secondStack = []
};


MyQueue.prototype.push = function(x) {
    this.firstStack.push(x)
};


MyQueue.prototype.pop = function() {
    
    let temp = undefined;
    if (this.firstStack.length > 0) {
        while (this.firstStack.length !== 0) {
            this.secondStack.push(this.firstStack.pop())
        }
    
        temp = this.secondStack.pop()
    
        while (this.secondStack.length !== 0) {
            this.firstStack.push(this.secondStack.pop())
        }
    }

    return temp
};


MyQueue.prototype.peek = function() {
    return this.firstStack[0];
};


MyQueue.prototype.empty = function() {
    return this.firstStack.length === 0 && this.secondStack.length === 0;
};



//Your MyQueue object will be instantiated and called as such:
var obj = new MyQueue()

console.log("Is Empty: ", obj.empty());


obj.push(10)
obj.push(20)
obj.push(30)

console.log("Peek: ", obj.peek());

console.log("Pop: ", obj.pop());
console.log("Pop: ", obj.pop());



console.log(obj);
