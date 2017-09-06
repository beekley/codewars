var sum_pairs=function(ints, s){
    /* Let's use a Set data structure
    We'll iterate through each element in the array,
    check if there is an item in the set already that === (s - element),
    if so, then return the two elements,
    else add the current element to the set
    */
    
    var ints_set = new Set();
    
    for (var i = 0; i < ints.length; i++) {
        if (ints_set.has(s - ints[i])) {
            return [s - ints[i], ints[i]];
        } else {
            ints_set.add(ints[i]);
        }
    }
}