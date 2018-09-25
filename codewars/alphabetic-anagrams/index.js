/**
 * @description
 * @param {String} word
 * @return {Number}
 */
const listPosition = word => {
  // Base case
if (word.length <= 1) return 1;

  // Create queue of strings to process
  const q = [ word ];
  // Track rank
  let rank = 1;
  /**
   * @description process string
   */
  const process = string => {
    // Base case
    if (string.length === 1) return rank += 1;
    // Iterate through string (charA)
    for (let a = 0; a < string.length; a += 1) {
      // Iterate through remainder of string (charB)
      for (let b = a + 1; b < string.length; b += 1) {
        // If there is a charB less than charA, add substring from after charA where charA is in charB place
        if (string[b] < string[a]) {
          let subString = string.slice(a + 1);
          subString[b - a] = string[a];
          q.push(subString);
          rank += 1;
        }
      }
    }
  };
  while (q.length > 0) {
    process(q.shift());
  }
  return rank;
};

console.log(`Expect 'ABAB' to be 2, actual: ${rankAnagram('ABAB')}`);
console.log(`Expect 'AAAB' to be 1, actual: ${rankAnagram('AAAB')}`);
console.log(`Expect 'BAAA' to be 4, actual: ${rankAnagram('BAAA')}`);
console.log(`Expect 'QUESTION' to be 24572, actual: ${rankAnagram('QUESTION')}`);
