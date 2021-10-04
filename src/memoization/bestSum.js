/* esversion: 6 */
/*
  Write a function `bestSum(targetSum, numbers)` that takes in a targetSum
  and an array of numbers as arguments
  The function should return an array containing the shortest combination
  of numbers that add up to exactly the targetSum

  If there is a tie for shortest combination, you may return any one of the
  shortest combinations.
 */

/*
  Brute force solution
  m = targetSum
  n = array's length
  time: O(n^m * m)
  space: O(m^2)
 */
// const bestSum = (targetSum, numbers) => {
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   let shortestCombination = null;

//   for (let num of numbers) {
//     const remiander = targetSum - num;
//     const result = bestSum(remiander, numbers);
//     if (result !== null) {
//       const combination = [...result, num];
//       if (shortestCombination === null || combination.length < shortestCombination.length) {
//         shortestCombination = combination;
//       }
//     }
//   }
//   return shortestCombination;
// };


/*
  memoized solution
  m = targetSum
  n = array's length
  Time: O(m^2 * n)
  Space: O(m^2)
 */
const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remiander = targetSum - num;
    const result = bestSum(remiander, numbers, memo);
    if (result !== null) {
      const combination = [...result, num];
      if (shortestCombination === null ||
        combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 3, 25]));