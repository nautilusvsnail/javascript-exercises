const repeatString = function(repeat_string, num_times) {
    let out_string = ""
    if (num_times < 0) {
        return "ERROR"
    }

    for (let i = 0; i < num_times ; i++) {
        out_string = out_string + repeat_string
    }
    return out_string
};

// Do not edit below this line
module.exports = repeatString;
