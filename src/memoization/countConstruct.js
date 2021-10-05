/*
  Write a function `countConstruct(target, wordBank)` that accepts a target
  string and an array of strings
  The function should return the number of ways that the target can be
  constructed by concatenating elements of the wordBank array

  You may reuse elemnts of wordBank as many times as needed
 */

// brute force solution
// Time: O(n^m * m)
// Space: O(m^2)
// const countConstruct = (target, wordBank) => {
//   if (target === '') return 1;

//   let totalcount = 0;
//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const numOfWays = countConstruct(target.slice(word.length), wordBank)
//       totalcount += numOfWays;
//     }
//   }
//   return totalcount;
// }


// memoized solution
// Time: O(n * m^2)
// Space: O(m^2)
const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalcount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numOfWays = countConstruct(target.slice(word.length), wordBank, memo)
      totalcount += numOfWays;
    }
  }
  memo[target] = totalcount;
  return totalcount;
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));