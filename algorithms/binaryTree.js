
class Node {
  constructor(value) {
    if (typeof value !== 'number') throw new Error('Value must be a number');
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * @description Adds an item to the tree
   * @param {Number} val - Item to be added to tree
   * @returns {Node} New node created in the tree with the value
   */
  add(value) {
    if (typeof value !== 'number') throw new Error('Value must be a number');
    if (value < this.value) {
      if (this.left instanceof Node) return this.left.add(value);
      this.left = new Node(value);
      return this.left;
    }
    else {
      if (this.right instanceof Node) return this.right.add(value);
      this.right = new Node(value);
      return this.right;
    }
  }
}

const node = new Node(123);
console.log(node);
console.log(node.add(10));
console.log(node.add(1));
console.log(node.add(15));
console.log(node);
