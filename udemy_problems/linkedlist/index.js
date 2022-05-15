// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let currentNode = this.head;
        let counter = 0;
        while(currentNode) {
            counter++;
            currentNode = currentNode.next;
        }
        
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currentNode = this.head;
        while(currentNode) {
            if(!currentNode.next) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if(!this.head) {
            return;
        }

        if(!this.head.next) {
            this.head = null;
            return;
        };

        let previousNode = this.head;
        let currentNode = previousNode.next;

        while(currentNode.next) {
            previousNode = previousNode.next;
            currentNode = previousNode.next;
        }
        previousNode.next = null;
    }

    insertLast(val) {
        if(this.getLast()) {
            this.getLast().next = new Node(val);
            return;
        }

        this.head = new Node(val);
    }

    getAt(index) {
        if (index > this.size() || !this.head) {
            return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while(index > counter) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    removeAt(index) {
        if(!this.head) return null;
        if(index === 0) {
            this.head = this.head.next;
            return;
        };
        if(index > this.size()) return null;

        const previous = this.getAt(index - 1);
        if(!previous || !previous.next ){
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(val, index) {
        if(!this.head) {
            this.head = new Node(val);
            return;
        }
        if(index === 0) {
            this.insertFirst(val);
            return;
        }

        let previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(val, previous.next);
        previous.next = node;
    }
}

module.exports = { Node, LinkedList };
