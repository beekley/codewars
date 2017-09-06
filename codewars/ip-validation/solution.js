function isValidIP(str) {
  
  // Split on '.'
  // Filter for correct digits
  // If length = 4, return true
  return str.split('.').filter((num) => {return parseInt(num) >= 0 && parseInt(num) < 256 && !num.match(/[^$,.\d]/)}).length === 4;
}