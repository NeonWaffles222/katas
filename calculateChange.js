const calculateChange = function (total, cash) {
  let totalChange = {};
  let change = [];
  cash -= total;
  while (cash !== 0) {
    if (cash >= 2000) {
      cash -= 2000;
      totalChange.twentyDollar = 0;
      change.push(2000);
    } else if (cash >= 1000) {
      cash -= 1000;
      totalChange.tenDollar = 0;
      change.push(1000);
    } else if (cash >= 500) {
      cash -= 500;
      totalChange.fiveDollar = 0;
      change.push(500);
    } else if (cash >= 200) {
      cash -= 200;
      totalChange.twoDollar = 0;
      change.push(200);
    } else if (cash >= 100) {
      cash -= 100;
      totalChange.oneDollar = 0;
      change.push(100);
    } else if (cash >= 25) {
      cash -= 25;
      totalChange.quarter = 0;
      change.push(25);
    } else if (cash >= 10) {
      cash -= 10;
      totalChange.dime = 0;
      change.push(10);
    } else if (cash >= 5) {
      cash -= 5;
      totalChange.nickel = 0;
      change.push(5);
    } else if (cash >= 1) {
      cash -= 1;
      totalChange.penny = 0;
      change.push(1);
    }
  }
  return totalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


/* { twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 } */