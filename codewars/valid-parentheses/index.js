/**
 * @description
 * @param {String} parens
 * @return {Boolean}
 */
const validParentheses = parens => {
  const o = '(';
  const c = ')';
  let count = 0;
  // Iterate through string
  for (let i = 0; i < parens.length; i += 1) {
    if (parens[i] == o) count += 1;
    if (parens[i] == c) count -= 1;
    if (count < 0) return false;
  }
  if (count != 0) return false;
  return true;
};
