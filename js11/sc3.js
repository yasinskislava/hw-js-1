const findLongestWord = (string) => {
  let max = 0;
  let index = 0;
  const arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      index = i;
    }
  }
  return arr[index];
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
