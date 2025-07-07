const convertToCelsius = function(n) {
  let res=(n-32)*(5/9);
  return Number(res.toFixed(1));
};

const convertToFahrenheit = function(n) {
  let res=(n*(9/5))+32;
  return Number(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
