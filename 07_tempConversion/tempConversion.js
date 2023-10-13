const convertToCelsius = function(temp_f) {
  let temp_c = null
  temp_c = Math.round(((temp_f - 32) * 5 / 9) * 10) / 10
  return temp_c
};

const convertToFahrenheit = function(temp_c) {
  let temp_f = null
  temp_f = Math.round((((9 / 5) * temp_c) + 32) * 10) / 10
  return temp_f
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
