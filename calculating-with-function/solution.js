var zero = buildANumber(0);
var one = buildANumber(1);
var two = buildANumber(2);
var three = buildANumber(3);
var four = buildANumber(4);
var five = buildANumber(5);
var six = buildANumber(6);
var seven = buildANumber(7);
var eight = buildANumber(8);
var nine = buildANumber(9);

// Plus is a function that takes in a right-sided number
// and returns a function that adds that to the left-sided number
function plus(numR) {
    return function(numL) {
        return numL + numR;
    }
}

function minus(numR) {
    return function(numL) {
        return numL - numR;
    }
}

function times(numR) {
    return function(numL) {
        return numL * numR;
    }
}

function dividedBy(numR) {
    return function(numL) {
        return numL / numR;
    }
}


// Let's create a higher order function to stay DRY
function buildANumber(num) {
    return function(args) {
        // if no arguments, must be right-most call in a chain
        if (!args) {
            return num;
        } 
        
        // else the argument will be a function
        return args(num);
    }
}