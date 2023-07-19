const camelCase = function (input) {
  let camel = "";
  for (let x = 0; x < input.length; x++) {
    if (input[x] === " ") {
      //A while loop is used incase there are multiple spaces 
      while (input[x] === " ") {
        x++;
      }
      camel += input[x].toUpperCase();
    } else {
      camel += input[x];
    }
  }
  return camel;
};

console.log(camelCase("this  is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));