function nextBigger(n){
    /*

    1. Find the right-most digit (swappee) that has a larger digit to its right (swapper)
    2. Move the swapper into the index location of the swappee
    3. Sort all digits currently to the right of the swapper from smallest to largest

    */
    
    // 1. Find the right-most digit (swappee) that has a larger digit to its right (swapper)
    
    // Turn number into an array of digits
    var digits = n.toString()
        .split("")
        .map(function(d) {return parseInt(d);});
    
    // Indices
    var swapperI, swappeeI;
    
    for (var i = digits.length - 1; i >= 0; i--) {
        for (var j = digits.length - 1; j > i; j--) {
            if  (digits[i] < digits[j]) {
                swapperI = j;
                swappeeI = i;
                break;
            }
        }
        if (swappeeI) {
            break;
        }
    }
    
    if ((!swappeeI || !swapperI) && swappeeI !== 0) {
        return -1;
    }
    
    // 2. Move the swapper into the index location of the swappee
    
    // Slice the array about the swappee's index
    var before = digits.slice(0, swappeeI);
    var after = digits.slice(swappeeI);
    
    // Push the swapper into the swappee's spot
    before.push(digits[swapperI]);
    
    // Remove the swapper from the after arary
    after.splice(swapperI - swappeeI, 1);
    
    // 3. Sort all digits currently to the right of the swapper from smallest to largest
    
    after.sort(function(a, b) {
        return a - b;
    })
    
    // Insert into array
    after.forEach(function(num) {
        before.push(num)
    });
    
    var nextBiggerInt = parseInt(before.join(""));
    return nextBiggerInt;
}