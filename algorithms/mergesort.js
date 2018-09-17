/**
 * @description Sorts an array
 * @param {Array} arr - array
 * @return {Array} sorted array
 */
const mergeSort = arr => {
  // Base case
  if (arr.length <= 1) return arr;

  // Split array in half
  const half = Math.floor(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half, arr.length);

  // Merge sort each half
  // Return merged array
  return merge(mergeSort(left), mergeSort(right));
};

/**
 * @description Merges two sorted arrays
 * @param {Array} arr1 - array
 * @param {Array} arr2 - array
 * @return {Array} merged array
 */
const merge = (arr1, arr2) => {
  const output = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length || p2 < arr2.length) {
    if (p2 >= arr2.length || (p1 < arr2.length && arr1[p1] < arr2[p2]) ) {
      output.push(arr1[p1]);
      p1 += 1;
    } else {
      output.push(arr2[p2]);
      p2 += 1;
    }
  }
  return output;
};

console.log(merge([1,3,6], [2,4,5]));
console.log(mergeSort([1,3,2,10,1,25]));
