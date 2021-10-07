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
  m = targetSum
  n = numbers length
  Time: O(m^2 * n)
  Space: O(m^2)
*/

const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }

  return table[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
