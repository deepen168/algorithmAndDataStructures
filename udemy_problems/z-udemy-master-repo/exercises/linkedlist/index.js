// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    onstructor(data, next) {
        this.data = data;
        this.next = next || null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(val) {
        this.head = new Node(val, this.head);
    }

    size() {
        if(!this.head) return null;
        const currentNode = this.head;
        const counter = 0;
        while(pointer) {
            counter++;
            currentNode = currentNode.next;
        }
        return counter;
    }

    getFirst() {
        if(!this.head) return null;
        return this.head;
    }

    getLast() {
        if(!this.head) return null;
        const currentNode = this.head;
        while(pointer){
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        if(!this.head) return;
        const currentNode = this.head;
        while(currentNode) {
            currentNode = currentNode.next;
        }
        currentNode = null;
    }

    insertLast(data) {
        if(!this.head) return;
        const currentNode = this.head;
        while(currentNode) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(data)
    }

    getAt(index) {
        const currentNode = this.head;
        const counter = 0
        if(!this.head || (this.size() < index)) return null;
        while(currentNodecounter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    removeAt(index) {
        if(this.size() < index) return null;
        if(!this.head) return null;
        if(index == 1) {
            this.head.next = null;
        }
        if(!this.head.next) return null;

        const previouseNode = this.head;
        const currentNode = previouseNode.next;
        const counter = 0;

        while(counter < index) {
            previouseNode = previouseNode.next;
            currentNode = currentNode.next;
            counter++;
        }
        previouseNode.next = currentNode.next;
    }

}

module.exports = { Node, LinkedList };
