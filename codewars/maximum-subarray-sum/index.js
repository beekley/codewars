/**
 * @description
 * @param {Number[]} arr
 * @return {Number}
 */
const maxSequence = arr => {
  // Store max sum
  let max = 0;
  // Iterate across the array
  for (let i = 0; i < arr.length; i += 1) {
    // Iterate from i to the end of the array
    for (let j = i; j < arr.length; j += 1) {
      // Find the sum from i -> j
      let sum = 0;
      for (let k = i; k <= j; k += 1) {
        sum += arr[k];
      }
      if (sum > max) max = sum;
    }
  }
  return max;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
