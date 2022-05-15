// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((child) => {
            return child.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Using function as an argument so this each nodes can be configured with new logic
    traverseBF(fn) {
        let workingArray = [this.root];
        while(workingArray[0]){
            let outElem = workingArray.shift();
            fn(outElem);
            workingArray.push(...outElem.children);
        }
    }

    // Difference between bredth first and depth first is that in bredth first we can push elements in the back of the all elements vs
    //    in Depth first we push all the new elements in front of the array

    traverseDF(fn) {
        let workingArray = [this.root];

        while(workingArray.length) {
            let outelem = workingArray.shift();
            fn(outelem);
            workingArray.unshift(...outelem.children);
        }
    }
}

module.exports = { Tree, Node };
