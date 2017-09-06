var sum_pairs=function(ints, s){
    // We're going to check each pair starting from index 0 for passing criteria
    for (var i = 0; i < ints.length; i++) {
        for (var j = i + 1; j < ints.length; j++) {
            if (ints[i] + ints[j] === s) {
                // If it passes, we need to make sure that there isn't a pair before j that also passes
                // We'll do that by recursing on a slice of the array
                if (!sum_pairs(ints.slice(i + 1, j), s)) {
                    return [ints[i], ints[j]];
                }
            }
        }
    }
}