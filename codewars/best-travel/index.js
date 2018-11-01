/**
 * @description
 */
const chooseBestSum = (t, k, ls) => {
  // console.log({t,k, ls});
  // Edge cases
  if (k > ls.length) return null;
  if (t < 0 || k < 1) return null;
  // Base case: return highest of ls that is under t
  if (k === 1) return ls.reduce((acc, cur) => cur <= t && cur > acc ? cur : acc, -Infinity);
  // Iterate through ls
  const maxLs = ls.map((l, i) => {
    // Recurse
    return l + (chooseBestSum(t - l, k - 1, ls.slice(i + 1)) || 0);
  });
  // return highest of maxls that is under t
  // TODO: Handle -Infinity case
  // TODO: Handle no path under t case
  console.log({t, k, maxLs})
  return maxLs.reduce((acc, cur) => cur <= t && cur > acc ? cur : acc, -Infinity);
};

const ls1 = [50, 55, 59, 57, 58];
console.log(chooseBestSum(56, 1, ls1), 55);

const ls2 = [50, 55, 56, 57, 58];
console.log(chooseBestSum(163, 3, ls2), 163);

const ls3 = [91, 74, 73, 85, 73, 81, 87];
console.log(chooseBestSum(230, 3, ls3), 228);
