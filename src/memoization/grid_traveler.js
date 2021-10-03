/*
  Say that yur are a traveler on a 2D grid. You begin in the top-left corner
  and your goal is to travel to the buttom-right corner. You may only move
  down or right.
  In how many ways can you travel to the goal on a grid with dimensions m * n?
  Write a function 'gridTraveler(m, n)' that calculates this.
*/

// brute force solution O(2^n+m) time && O(n+m) space
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

// memoized version solution: O(m * n) time && O(n + m) space
const gridTraveler_memo = (m, n, memo = {}) => {
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}

// console.log(gridTraveler_memo(1, 1))
// console.log(gridTraveler_memo(3, 2))
// console.log(gridTraveler_memo(15, 15))
// console.log(gridTraveler_memo(15, 13))