function dirReduc(arr){
    /*
    We're going to use two counters: one for east-west and one for north-south traversal
    For each direction, we will increment or decrement one of the counters

    North: ns++
    South: ns--
    East: ew++
    West: ew--

    Then create an array of directions of the results
    */

    var ns = 0, ew = 0, reduced = [];
    arr.forEach(function(dir) {
        console.log(dir);
        if (dir === "NORTH") {
            ns++;
        } else if (dir === "SOUTH") {
            ns--;
        } else if (dir === "EAST") {
            ew++;
        } else if (dir === "WEST") {
            ew--;
        } else {
            console.log("Direction " + dir + " is not a valid direction");
        }
    });

    for (var i = 0; i < Math.abs(ns); i++) {
        if (ns > 0) {
            reduced.push("NORTH");
        } else {
            reduced.push("SOUTH");
        }
    }
    
    for (var i = 0; i < Math.abs(ew); i++) {
        if (ew > 0) {
            reduced.push("EAST");
        } else {
            reduced.push("WEST");
        }
    }
    
    return reduced;
}