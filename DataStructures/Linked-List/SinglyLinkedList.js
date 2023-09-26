
class Node {
    constructor (value) {
        this.value = value,
        this.next = null
    }
}


class LinkedList {
    constructor (value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    
    append (value) {
        const node = new Node(value)
        this.tail.next = node
        this.tail = node;
        this.length++;
    }

    prepend (value) {
        const node = new Node(value)
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    printLinkedList () {
        const array = []
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    insert (index, value) {
        // check params
        if (index >= this.length) {
            this.append(value)
        }

        const prevNode = this.traverseToIndex(index - 1)
        const nextNode = prevNode.next;
        
        const node = new Node(value)
        prevNode.next = node;
        node.next = nextNode;

        this.length++;
        return this.printLinkedList()
        
    }

    traverseToIndex (idx) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== idx) {
            currentNode = currentNode.next;    
            counter++;
        }

        return currentNode;
    }
}

const myLinkedList = new LinkedList(20)

// append
myLinkedList.append(25)
myLinkedList.append(30)

//prepend
myLinkedList.prepend(15)
myLinkedList.prepend(10)


// insert
myLinkedList.insert(2, 99)

// remove



