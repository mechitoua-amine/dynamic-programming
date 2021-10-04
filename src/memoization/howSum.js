/*
  write a function `howSum(targetSum, numbers)` that takes in a targetSum
  and ann array of numbers as arguments.
  The function should return an array containing any combination of
  elements that add up to exactly the targetSum. if there is no
  combinaiton that adds up to the targetSum, then return null.

  if there are multiple combinations possible, you may return any single one
*/

/*
  Brute force solution
  m = target sum
  n = array's length
  O(n^m * m) time
  O(m) space
 */
/*const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers);
    if (result !== null) {
      return [...result, num];
    }
  }
  return null;
}*/

/*
  memoized solution
  O(n*m^2) time
  O(m^2) space
 */
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers, memo);
    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}