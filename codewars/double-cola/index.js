/**
 * @description
 * @param {String[]} names
 * @param {Number} r
 */
const whoIsNext = (names, r) => {
  let i = 0;
  let m = 1;
  while (i + names.length * m < r) {
    i += names.length * m;
    m *= 2;
  }
  let j = 0;
  for (let n = 0; n < names.length; n += 1) {
    const name = names[n];
    for (let k = 0; k < m; k += 1) {
      if (j === (r - i - 1)) return name;
      j += 1;
    }
  }
};

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7))
