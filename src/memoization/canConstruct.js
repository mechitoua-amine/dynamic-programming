/*
  Write a funciton `canConstruct(target, wordBank)` that accepts a target
  string and an array of strings
  The function should return a boolean indication whether or not the target
  can be constructed by concatenating elements of the wordbank array

  You may reuse elements of wordBank as many times as needed
 */

/*
 Brute force solution
  m = target
  n = wordBank.length
  Time: O(n^m * m)
  Space: O(m * n)
 */
// const canConstruct = (target, wordBank) => {
//   if (target === "") return true;
//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       if (canConstruct(suffix, wordBank) === true) return true;
//     }
//   }

//   return false;
// };

/*
  Memoization solution
  m = target.length
  n = wordBank.length
  Time: O(n * m^2)
  Space: O(m^2)
 */
const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));