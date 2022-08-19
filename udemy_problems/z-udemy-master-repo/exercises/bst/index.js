// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {

        if(data > this.data) {
            if (this.right === null ) {
                this.right = new Node(data);
            } else {
                this.right.insert(data);
            }
        } else {
            if (this.left === null ) {
                this.left = new Node(data);
            } else {
                this.left.insert(data);
            }
        }
    }

    contains(data) {

        if(data === this.data){
            return this;
        }
        
        if(data > this.data) {
            if (this.right === null ) {
                return this.right;
            } else if (this.right.data === data) {
                return this.right;
            } else {
                this.right.contains(data);
            }
        } else {
            if (this.left === null) {
                return this.left;
            }else if(this.left.data === data) {
                return this.left;
            } else {
                this.left.contains(data);
            }
        }
    }
}

module.exports = Node;
