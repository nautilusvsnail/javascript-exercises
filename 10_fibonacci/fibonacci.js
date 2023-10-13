const fibonacci = function(fib_num) {
    fib_num = parseInt(fib_num);
    let fib_array = [1, 1];
    let last = 1;
    let second_last = 1;
    if (fib_num < 1) {
        return 'OOPS';
    } else if (fib_num < 3) {
        return 1;
    } else {
        for (let i = 2; i < fib_num; i++) {
            last = fib_array[fib_array.length - 1];
            second_last = fib_array[fib_array.length - 2];
            fib_array.push(last + second_last);
        }
        return fib_array[fib_array.length - 1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
