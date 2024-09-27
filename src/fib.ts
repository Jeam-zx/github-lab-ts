// util function that computes the fibonacci numbers
type fibonacciFunction = (n: number) => number;

/**
 * @type {fibonacciFunction}
 */
const fibonacci: fibonacciFunction = function (n: number): number {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

module.exports = fibonacci;