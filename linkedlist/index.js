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

    insertAt(data, index) {

        if (!this.head) {
            this.head = new Node(data);;
            return;
        }
        
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let previousNode = this.getAt(index - 1) || this.getLast();

        let newNode = new Node(data, previousNode.next);

        previousNode.next = newNode;
        
    }

    insertLast(data){

        if(!this.head){
            this.head = new Node(data);
            return;
        }
        this.getLast().next = new Node(data);
        // let node = this.head;
        
        // while(node){
        //     if(!node.next){
        //         node.next = new Node(data);
        //         return;
        //     }
        // }
    }

    size(){
        let counter = 0;
        let node = this.head;
        
        while(node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getAt(i) {

        let node = this.head;
        let counter = 0;
        
        //if first node is empty
        if(!node) {
            return null;
        }

        while(i !== counter) {
            node = node.next;
            counter++
        }

        // if index is out of bound
        if (i > counter){
            return null;
        }

        return node;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while(node) {
            if(!node.next){
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }

        this.head = this.head.next;
    }

    removeAt(i) {

        if(!this.head){
            return;
        }

        if(i === 0) {
            this.head = this.head.next;
            return;
        }

        let previousNode = this.getAt(i-1);
        if(!previousNode.next || !previousNode) {
            return;
        }

        previousNode.next = previousNode.next.next;
    }

    removeLast(){

        if(!this.head){
            return;
        }

        if(!this.head.next){
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }
}

// const l = new LinkedList();
// l.insertFirst(1);
// l.insertAt('a',0);
// l.getAt('0');
// l.insertFirst(2);
// l.insertFirst(3);


module.exports = { Node, LinkedList };
