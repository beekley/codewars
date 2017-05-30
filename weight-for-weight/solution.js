function orderWeight(strng) {
    // Split the string into an array of weights
    var weights = strng.split(" ");
    
    // Create an array of new "weights" (sums) for each person
    var people = weights.map(function(weight, i, a) {
        // sum up the digits
        var digits = weight.toString().split("");
        return { 
            sum: digits.reduce(function(acc, val) {
                return acc + parseInt(val);
            }, 0),
            weight: weight
        };
    })
    
    // Sort by the sums
    people.sort(function(a, b) {
        // attempt to sort on difference
        if (a.sum != b.sum) {
            return a.sum - b.sum;
        } 
        // else sort on the string
        else if (a.weight > b.weight) {
            return 1;
        } 
        else {
            return -1;
        }
        
    });
    
    // Return the weights of each person
    return people.map(function(person) {
        console.log(person);
        return person.weight;
    }).join(" ");
}