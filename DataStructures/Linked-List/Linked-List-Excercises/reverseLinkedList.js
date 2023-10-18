// Using Singly Linked List to reverse the list

class Node {
    constructor (value) {
        this.value = value,
        this.next = null
    }
}


class LinkedList {
    constructor (value) {
        this.head = new Node(value)
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


    remove (index) {
        if (index > this.length) return;

        if (index === 0) {
            this.head = this.head.next;
          } else {
            const prevNode = this.traverseToIndex(index - 1);
            const nextNode = prevNode.next.next;
        
            prevNode.next = nextNode;
          }
        this.length--;
        return this.printLinkedList();
    }



    insert (index, value) {
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


    reverse () {    
        let prev = null, next = null;
        let current = this.head;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next
        }   

        this.head = prev;

        return this.printLinkedList();
    }
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(15)
myLinkedList.append(20)
myLinkedList.append(30)
myLinkedList.insert(3, 25)

myLinkedList.reverse()
