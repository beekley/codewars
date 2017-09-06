function isMerge(s, part1, part2) {
    // Create stacks 
    function stackify(str) {
        var stack = new Array();
        for (let i = str.length - 1; i >= 0; i--) {
            stack.push(str[i]);
        }
        return stack;
    }
    
    s = stackify(s);
    part1 = stackify(part1);
    part2 = stackify(part2);
    
    const count = s.length;
    // We use this stack to store common characters
    var parallel = new Array();
    
    // Check for merge
    // Currently fails when the stacks have the same character and it tries to go down the other path
    for (let i = 0; i < count; i++) {
        current = s.pop();
        
        // First check if both strings have the character
        if (current == part1[part1.length - 1] && current == part2[part2.length - 1]) {
            parallel.push(part1.pop());
            part2.pop();
        }
        
        // Check if character is not in any stack
        else if (current == part1[part1.length - 1]) {
            part1.pop();
            
            // Push the parallel branch into the other stack
            stackify(parallel).forEach(function(char) {
                part2.push(char);
            })
            parallel = new Array();
        }
        else if (current == part2[part2.length - 1]) {
            part2.pop();
            
            // Push the parallel branch into the other stack
            stackify(parallel).forEach(function(char) {
                part1.push(char);
            })
            parallel = new Array();
        }
        else if (current == parallel[parallel.length - 1]) {
            parallel.pop();
        }
        else {
            return false;
        }
    }
    
    if (part1.length === 0 && part2.length === 0 && !(parallel.length > 0)) {
        return true;
    }
    
    return false;
    
}