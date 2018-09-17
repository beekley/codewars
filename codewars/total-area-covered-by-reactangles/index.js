/**
 * @description
 * @param {[[number]]} rectangles
 * @return {number}
 */
// const calculate = rectangles => {
//   // Create hash map to stored filled cells
//   const filled = {};
//   // Iterate through rectangles
//   rectangles.forEach(rectangle => {
//     const xmin = rectangle[0];
//     const ymin = rectangle[1];
//     const xmax = rectangle[2];
//     const ymax = rectangle[3];
//     // Iterate through rows in rectangle
//     for (let x = xmin; x < xmax; x += 1) {
//       // Iterate through columns in rectangle
//       for (let y = ymin; y < ymax; y += 1) {
//         // Fill cell
//         if (!filled[x]) filled[x] = {};
//         filled[x][y] = true;
//       }
//     }
//   });
//   // Sum all cells
//   return Object.values(filled).reduce((sum, row) => sum + Object.values(row).length, 0);
// };

/**
 * @description
 * @param {[[number]]} rectangles
 * @return {number}
 */
const calculate = rectangles => {
  // Store sum
  let sum = 0;
  // Iterate through rectangles
  rectangles.forEach((rectangle, i) => {
    const xmin = rectangle[0];
    const ymin = rectangle[1];
    const xmax = rectangle[2];
    const ymax = rectangle[3];
    // Iterate through rows in rectangle
    for (let x = xmin; x < xmax; x += 1) {
      // Iterate through columns in rectangle
      for (let y = ymin; y < ymax; y += 1) {
        // Iterate through previous rectangles
        let isUnique = true;
        for (let j = 0; j < i; j += 1) {
          const otherRectangle = rectangles[j];
          const otherxmin = otherRectangle[0];
          const otherymin = otherRectangle[1];
          const otherxmax = otherRectangle[2];
          const otherymax = otherRectangle[3];

          if (x >= otherxmin && x < otherxmax && y >= otherymin && y < otherymax) {
            isUnique = false;
            break;
          }
        }
        if (isUnique) sum += 1;
      }
    }
  });
  // Sum all cells
  return sum;
};

console.log(calculate([[ 66577, 85059, 159367, 167236 ], [ 66577, 85059, 147895, 87575 ]]));
// big case: [ 66577, 85059, 159367, 167236 ] [ 66577, 85059, 147895, 87575 ]
