/* const multiplicationTable = function (maxValue) {
  let table = [];
  let row = [];
  for (let x = 1; x <= maxValue; x++) {
    row = [];
    for (let y = 1; y <= maxValue; y++) {
      row.push(x * y);
    }
    table.push(row);
  }
  return table;
}; */

const multiplicationTable = function (maxValue) {
  let table = "";
  for (let x = 1; x <= maxValue; x++) {
    for (let y = 1; y <= maxValue; y++) {
      table += (x * y).toString();
      table += " ";
    }
    table += '\n';
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));