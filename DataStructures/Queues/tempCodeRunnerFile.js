
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
    const length = this.firstStack.length
    return this.firstStack[length - 1];
};


MyQueue.prototype.empty = function() {
    return this.firstStack.length === 0 && this.secondStack.length === 0;
};
