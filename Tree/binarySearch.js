class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    // if no root, newNode becomes root
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    // starting from root and while branches exist
    let currNode = this.root;
    while (currNode) {
      // if val is in tree, return undefined
      if (val === currNode.val) {
        return undefined;
      }
      // if val is less than current val
      if (val < currNode.val) {
        // see if left of currNode is empty
        if (!currNode.left) {
          currNode.left = newNode;
          return this;
        }
        // update currNode
        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return this;
        }
        // update currNode
        currNode = currNode.right;
      }

    }

  }

}


