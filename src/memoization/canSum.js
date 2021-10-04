/*
  Write a function `canSum(targetSum, numbers)` that takes in a targetSum
  and an array of numbers as arguments.
  The function should return a boolean indicating whether or not it is
  possible to generate the targetSum using numbers from the array.

  you may use an element of the array as many times as needed.
  you may assume that all input numbers are non-negative.
*/

// m = target sum
// n = array length
// brute force solution: time O(n^m) space O(m)
// const canSum = (targetSum, numbers) => {
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (let num of number) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers) === true) return true;
//   }
//   return false;
// }

// the memoized solution
/*
  m = target sum
  n = array length
  O(m*n) time
  O(m) space
 */
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of number) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

console.log(canSum(7, [5, 3, 2]));
console.log(canSum(7, [4, 2]));
console.log(canSum(9, [4, 2, 1, 6, 3]));