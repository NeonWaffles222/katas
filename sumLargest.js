const sumLargestNumbers = function (data) {
  let first = 0, second = 0, sum = 0; cut = 0;
  for (let x = 0; x < data.length; x++) {
    for (let y = 0; y < data.length; y++) {
      if (data[y] > first) {
        first = data[y];
        cut = y;
      }
    }
    data.splice(cut, 1);
    if (data[x] > second) {
      second = data[x];
    }
  }
  sum = first + second;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));