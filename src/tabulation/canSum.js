/*
  Write a function `canSum(targetSum, numbers)` that takes in a targetSum
  and an array of numbers as arguments.
  The function should return a boolean indicating whether or not it is
  possible to generate the targetSum using numbers from the array.

  you may use an element of the array as many times as needed.
  you may assume that all input numbers are non-negative.
*/

/*
  m = target sum
  n = numbers length
  Time: O(m*n)
  Space: O(m)
 */

const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1)
    .fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));