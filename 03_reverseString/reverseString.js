const reverseString = function(in_string) {
    string_array = in_string.split("")
    reverse_array = []
    for (character of string_array) {
        reverse_array.unshift(character)
    }
    return reverse_array.join("")
};

// Do not edit below this line
module.exports = reverseString;
