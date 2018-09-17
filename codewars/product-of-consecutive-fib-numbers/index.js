/**
 * @description
 * @param {Number} prod
 * @return {Boolean}
 */
const productFib = prod => {
  let prev = 0;
  let cur = 1;
  while (true) {
    const curProd = prev * cur;
    if (curProd === prod) return [prev, cur, true];
    if (curProd > prod) return [prev, cur, false];
    const tempCur = cur;
    cur = prev + cur;
    prev = tempCur;
  }
};
