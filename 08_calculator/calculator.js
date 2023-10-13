const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b	
};

const sum = function(sum_array) {
	let sum_out = 0
  for (let i = 0; i < sum_array.length; i++) {
    sum_out += sum_array[i]
  }
  return sum_out
};

const multiply = function(product_array) {
  let product_out = 1
  for (let i = 0; i < product_array.length; i++) {
    product_out = product_out * product_array[i]
  }
  return product_out
};

const power = function(base, power) {
  return base ** power
};

const factorial = function(fact_in) {
  let fact_out = 1
  for (let i = fact_in; i > 0 ; i--) {
    fact_out = fact_out * i
  }
  return fact_out	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
