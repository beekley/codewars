/**
 * @description Gets the double-linear value for a given number
 * @param {Number} n - Integer
 * @return {Number}
 */
const dblLinear = n => {
  const q = [1];
  let i = 0;
  /**
   * @description Populates the queue and store for current value
   * @param {Number} cur - Integer
   * @return {Number}
   */
  const create = cur => {
    // Base case
    if (q.length > n * 1.2) return q[n];
    const l1 = cur * 2 + 1;
    let l1i = 0;
    while (l1i <= q.length) {
      if (l1i === q.length) q.push(l1);
      if (q[l1i] === l1) break;
      if (q[l1i] > l1) {
        q.splice(l1i, 0, l1);
        break;
      }
      l1i += 1;
    }
    const l2 = cur * 3 + 1;
    let l2i = 0;
    while (l2i <= q.length) {
      if (l2i === q.length) q.push(l2);
      if (q[l2i] === l2) break;
      if (q[l2i] > l2) {
        q.splice(l2i, 0, l2);
        break;
      }
      l2i += 1;
    }
    i += 1;
    return create(q[i]);
  };
  return create(q[i]);
};

console.log(dblLinear(1), 3);
console.log(dblLinear(10), 22);
console.log(dblLinear(100), 447);
// for (let i = 0; i < 10; i += 1) {
//   console.log('STARTING:', i);
//   console.log('ANSWER:', dblLinear(i));
// }
