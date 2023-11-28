class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (current.value > value) {
        // go left side and check if there is a node
        if (!current.left) {
          current.left = newNode;
          break;
        }
        //   if there is more than one node in the lest side
        current = current.left;
      }

      if (current.value < value) {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  inorder(node = this.root) {
    if (node === null) {
      return;
    }
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }

  delete(node = this.root, value) {
    if (!node) {
      return null;
    }

    if (node.value > value) {
      node.left = this.delete(node.left, value);
      return node;
    } else if (node.value < value) {
      node.right = this.delete(node.right, value);
    }

    // if found the node:
    else {
      // if there is a leaf node:
      if (!node.left && !node.right) {
        return null;
      }

      // if there is only one child node left or right:
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      // if there are two child find the right successor(right side's lowest value) node:
      let temp = node.right;
      while (temp.left) {
        // go to the left side of the right node
        temp = temp.left;
      }
      // assign the successor value to the current node value
      node.value = temp.value;
      // delete the successor node:
      node.right = this.delete(node.right, temp.value);
    }
    return node;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(14);
bst.insert(16);

bst.inorder();

console.log(bst.delete(bst.root, 15));

console.log(bst);
