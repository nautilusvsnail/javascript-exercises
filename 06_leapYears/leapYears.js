const leapYears = function(year) {
    let is_leap_year = false
    if (year % 400 == 0) {
        is_leap_year = true
    } else if (year % 100 == 0) {
        is_leap_year = false
    } else if (year % 4 == 0) {
        is_leap_year = true
    }
    return is_leap_year
};

// Do not edit below this line
module.exports = leapYears;
