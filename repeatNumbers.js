const repeatNumbers = function (data) {
  let numbers = []
  for (let num of data) {
    let repeat = "";
    for (let x = 0; x < num[1]; x++) {
      repeat += num[0];
    }
    numbers.push(repeat);
  }
  return numbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
