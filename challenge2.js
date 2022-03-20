/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log(`Hello ${name}`);
}
let the_name = "Nanami";
greet(the_name);

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
let the_num = 10;
isOdd(the_num);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  if (n % 2 === 0) {
    return n/2;
  } else {
    return(n-1)/2;
  }
}
let n4 = 10;
oddsSmallerThan(n4);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n % 2 === 0) {
    return (n * 2);
  } else {
    
    return (n**2);
  }
}
let n3 = 3;
squareOrDouble(n3);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
