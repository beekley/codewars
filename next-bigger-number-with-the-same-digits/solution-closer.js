function nextBigger(n){
    /*

    1. Find the right-most digit (swapper) that is larger than a digit to its left (swappee)
    2. Move the swapper into the index location of the swappee
    3. Sort all digits currently to the right of the swapper from smallest to largest

    */
    
    // 1. Find the right-most digit (swapper) that is larger than a digit to its left (swappee)
    
    // Turn number into an array of digits
    var digits = n.toString()
        .split("")
        .map(function(d) {return parseInt(d);});
    
    // Indices
    var swapperI, swappeeI;
    
    for (var i = digits.length - 1; i >= 1; i--) {
        for (var j = i - 1; j >= 0; j--) {
            if  (digits[i] > digits[j]) {
                swapperI = i;
                swappeeI = j;
                break;
            }
        }
        if (swappeeI) {
            break;
        }
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
    
    if (nextBiggerInt === n) {
        return -1;
    } 
    else {
        return nextBiggerInt;
    }
}