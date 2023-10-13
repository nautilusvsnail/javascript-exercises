const palindromes = function (in_string) {
    in_string = in_string.replace(/[^\w]/g, '')
    in_string = in_string.replace(/[A-Z]/g, function(match) {return match.toLowerCase();});
    for (let i = 0; i < Math.ceil(in_string.length); i++) {
        // console.log(in_string[i], ' ', in_string[in_string.length - (i+1)])
        if (in_string[i] != in_string[in_string.length - (i+1)]) {
            return false
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
