function nextBigger(n){
    // The general idea is to switch the right-most digit with the right-most, smaller digit
    
    // turn number into an array of digits
    var digits = n.toString()
        .split("")
        .map(function(d) {return parseInt(d);});
             
    console.log(digits);
    
    // The digit that will get swapped is the left-most instance of the consecutive identical right-most digits
    // e.g. for [1, 4, 4]: swappedIndex = 1
    var swappedIndex = digits.length - 1;
    var swappedDigit = digits[swappedIndex];
    for (var j = digits.length - 2; j >= 0; j--) {
        if (digits[j] === swappedDigit) {
            swappedIndex = j;
        }
        else {
            break;
        }
    }
    
    var swapped = false;
    var swappedArray = []
    
    // Swap the digits
    for (var i = swappedIndex - 1; i >= 0; i--) {
        if (!swapped && swappedDigit > digits[i]) {
            swappedArray[i] = swappedDigit;
            swappedArray[swappedIndex] = digits[i];
            swapped = true;
        } 
        else {
            swappedArray[i] = digits[i];
        }
    }
    
    // Push in any digits after the swappedIndex
    for (var k = swappedIndex + 1; k < digits.length; k++) {
        swappedArray.push(digits[k]);
    }
    
    // Recombine into an int
    return parseInt(swappedArray.join(""));
    
}