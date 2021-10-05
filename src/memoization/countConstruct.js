/*
  Write a function `countConstruct(target, wordBank)` that accepts a target
  string and an array of strings
  The function should return the number of ways that the target can be
  constructed by concatenating elements of the wordBank array

  You may reuse elemnts of wordBank as many times as needed
 */


// brute force solution
const countConstruct = (target, wordBank) => {
  if (target === '') return 1;

  let totalcount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numOfWays = countConstruct(target.slice(word.length), wordBank)
      totalcount += numOfWays;
    }
  }
  return totalcount;
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));