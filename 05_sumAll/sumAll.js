const sumAll = function() {
    let out_sum = 0
    let int_one = 0
    let int_two = 0
    
    if (arguments[0] < 0 | 
        arguments[1] < 0 |
        typeof(arguments[0]) != "number" | 
        typeof(arguments[1]) != "number") {
        return "ERROR"
    } else if (arguments[1] < arguments[0]) {
        int_one = arguments[1]
        int_two = arguments[0]
    } else {
        int_one = arguments[0]
        int_two = arguments[1]
    }
    
    for (let i = int_one; i <= int_two; i++) {
        out_sum += i
    }
    return out_sum

};

// Do not edit below this line
module.exports = sumAll;
