const removeFromArray = function() {
    let arg_array = Array.from(arguments)
    let in_array = arg_array.splice(0,1)[0]
    let index = 0
    for (let arg_val of arg_array) {
        index = in_array.indexOf(arg_val)
        if (index >= 0) {
            in_array.splice(index,1)
        }
    }
    return in_array
};

// Do not edit below this line
module.exports = removeFromArray;
