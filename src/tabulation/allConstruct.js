/*
  Write a function 'allConstruct(target, wordBank)' that accepts a target
  string and an array of strings
  The function should return a 2D array containing all of the ways that
  the target can be constructed by concatenatin elements of the wordBank
  array. Each element of the 2D array should represent one combination that
  constructs the target

  You may reuse elements of wordBank as many times as needed
 */

/*
  m = target
  n = wordBank.length
  Time: O(n^m)
  Space: O(n^m)
*/

const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map((subAray) => [...subAray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }

  return table[target.length];
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
