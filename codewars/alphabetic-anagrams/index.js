/**
 * @description
 * @param {String} word
 * @return {Number}
 */
const rankAnagram = word => {
  // Create queue of strings to process
  const q = [ word ];
  // Track rank
  let rank = 0;
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
          let subString = string.slice(a);
          subString[b - a] = string[a];
          q.push(subString);
          rank += 1;
          console.log(subString, q);
        }
      }
    }
  };
  // while (q.length > 0) {
    process(q.shift());
  // }
  return rank;
};

console.log(rankAnagram('ABAB'));
