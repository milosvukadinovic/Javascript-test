/**
 * @param {string} string is the input.
 * @return {string} gives back the string capitalized.
 */
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

/**
 * @param {string} string is the input.
 * @return {string} gives back the string in reverse.
 */
function reverseString(string) {
  return string.split('').reverse().join('');
}

/**
 * @param {number} a is the input.
 * @param {number} b is the input.
 * @return {number} gives back the result with coressponding function.
 */
const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

/**
 * @param {array} array is the input.
 * @return {array} gives back the result with array info.
 */
function arrayAnalysis(array) {
  return {
    average: Math.round(1000 * array.reduce((sum, a
    ) => sum + a, 0)/array.length)/1000,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = {arrayAnalysis,
  calculator, capitalize, reverseString};
