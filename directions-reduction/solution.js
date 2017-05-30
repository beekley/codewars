function dirReduc(arr){

    var ns = 0, ew = 0, reduced = [];
    
    // ugh I repeast myself a lot here.
    arr.forEach(function (dir) {
        if (dir === "NORTH") {
            ns++;
            if (ew !== 0) {
                for (var i = 0; i < Math.abs(ew); i++) {
                    if (ew > 0) {
                        reduced.push("EAST");
                    } else {
                        reduced.push("WEST");
                    }
                }
                
                ew = 0;
            }
        } else if (dir === "SOUTH") {
            ns--;
            if (ew !== 0) {
                for (var i = 0; i < Math.abs(ew); i++) {
                    if (ew > 0) {
                        reduced.push("EAST");
                    } else {
                        reduced.push("WEST");
                    }
                }
                
                ew = 0;
            }
        } else if (dir === "EAST") {
            ew++;
            if (ew !== 0) {
                for (var i = 0; i < Math.abs(ns); i++) {
                    if (ns > 0) {
                        reduced.push("NORTH");
                    } else {
                        reduced.push("SOUTH");
                    }
                }
                
                ns = 0;
            }
        } else if (dir === "WEST") {
            ew--;
            if (ew !== 0) {
                for (var i = 0; i < Math.abs(ns); i++) {
                    if (ns > 0) {
                        reduced.push("NORTH");
                    } else {
                        reduced.push("SOUTH");
                    }
                }
                
                ns = 0;
            }
        } else {
            console.log("Direction " + dir + " is not a valid direction");
        }
    });
    
    // And another repetition...
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
    
    // And finally recurse!
    if (JSON.stringify(arr) != JSON.stringify(reduced)) {
        reduced = dirReduc(reduced);
    }
    
    return reduced;
}