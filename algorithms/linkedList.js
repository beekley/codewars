/**
 * @description Node of a linked list
 */
class Node {
  /**
   * @description
   */
  constructor(value) {
    this.next = null;
    this.value = value;
  }

  addNode(value) {
    let node = this;
    while(node.next && node.next instanceof Node) {
      node = node.next;
    }
    node.next = new Node(value);
    return node.next;
  }
}

const head = new Node('hi');
head.addNode('hello');
head.addNode('there');
console.log(head);
