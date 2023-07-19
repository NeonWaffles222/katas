const numberOfVowels = function (data) {
  const vowels = ["a", "e", "i", "o", "u"];
  let num = 0;
  for (let x = 0; x < data.length; x++) {
    for (let vowel of vowels) {
      if (vowel == data[x]) {
        num++;
      }
    }
  }
  return num;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));