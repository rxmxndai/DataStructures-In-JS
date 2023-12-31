
class Node {
    constructor (value) {
        this.value = value,
        this.prev = null,
        this.next = null
    }
}


class DoublyLinkedList {
    constructor (value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }
    
    append (value) {
        const node = new Node(value)
        node.prev = this.tail
        this.tail.next = node
        this.tail = node;
        this.length++;
    }

    prepend (value) {
        const node = new Node(value)
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
    }

    printLinkedList () {
        const array = []
        let currentNode = this.head;

        while (currentNode !== null) {
            console.log(currentNode);
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(array);
    }


    remove (index) {
        if (index > this.length) return;

        if (index === 0) {
            this.head = this.head.next;
          } else {
            const prevNode = this.traverseToIndex(index - 1);
            const nextNode = prevNode.next.next;
        
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
          }
        this.length--;
        return this.printLinkedList();
    }



    insert (index, value) {
        // check params
        if (index >= this.length) {
            this.append(value)
        }

        const prevNode = this.traverseToIndex(index - 1)
        const nextNode = prevNode.next;
        
        const node = new Node(value)
        node.prev = prevNode
        prevNode.next = node;
        node.next = nextNode;
        nextNode.prev = node;

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

const myLinkedList = new DoublyLinkedList(20)

// append
myLinkedList.append(25)
myLinkedList.append(30)

//prepend
myLinkedList.prepend(15)
myLinkedList.prepend(10)


// insert
console.log("Insert 99 at index 2: ");
myLinkedList.insert(2, 99)

// remove
console.log("Remove index 2: ");
myLinkedList.remove(2)

// console.log(myLinkedList.head);

