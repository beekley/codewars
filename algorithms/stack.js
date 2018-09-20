/**
 * @description
 */
class Stack {
  /**
   * @description
   */
  constructor() {
    this.items = [];
    this.length = 0;
  }

  /**
   * @description
   */
  pop() {
    // Zero case
    if (this.length === 0) return undefined;
    // Remove the last element and return it
    const popped = this.items[this.length - 1];
    this.items.length -= 1;
    this.length -= 1;
    return popped;
  }

  /**
   * @description
   */
  push(item) {
    this.items[this.length] = item;
    this.length += 1;
    return this.length;
  }
}

const stack = new Stack();
console.log(stack.push(123));
console.log(stack.pop());
console.log(stack.pop());
