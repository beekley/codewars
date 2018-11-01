
/**
 * @description
 */
class Queue {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  /**
   * @description Adds an item to the queue
   * @param {Any} val - Item to be added to queue
   * @returns {Number} Length of the queue
   */
  enqueue(val) {
    this.data[this.length] = val;
    this.length += 1;
    return this.length;
  }

  /**
   * @description Removes and returns the first item of the queue
   * @returns {Any} Value of the first item of the queue
   */
  dequeue() {
    if (this.length <= 0) return undefined;
    const val = this.data[0];
    // Shift data forward
    for (let i = 0; i < this.length - 1; i =+ 1) {
      this.data[i] = this.data[i + 1];
    }
    this.length -= 1;
    return val;
  }
};

const q = new Queue();
console.log(q.enqueue('hello'), 'should equal 1');
console.log(q.enqueue('hi'), 'should equal 2');
console.log(q.dequeue(), 'should equal hello');
