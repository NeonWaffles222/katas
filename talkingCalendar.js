const talkingCalendar = function (date) {
  let year = "", month = "", day = "", humanDate = "";
  for (let x = 0; x < date.length; x++) {
    if (x < 4) {
      year += date[x];
    } else if (x <= 6 && date[x] !== "/") {
      month += date[x];
      //Had a bug where (x !== 7) returns true when (x = 7) no idea why
      //changed to (date[x] !== "/") and it works now
    } else if (x <= 9 && date[x] !== "/") {
      day += date[x];
    }
  }
  month = Number(month);
  day = Number(day);
  switch (month) {
    case 1:
      humanDate += "January ";
      break;
    case 2:
      humanDate += "Febuary ";
      break;
    case 3:
      humanDate += "March ";
      break;
    case 4:
      humanDate += "April ";
      break;
    case 5:
      humanDate += "May ";
      break;
    case 6:
      humanDate += "June ";
      break;
    case 7:
      humanDate += "July ";
      break;
    case 8:
      humanDate += "August ";
      break;
    case 9:
      humanDate += "September ";
      break;
    case 10:
      humanDate += "October ";
      break;
    case 11:
      humanDate += "November ";
      break;
    case 12:
      humanDate += "December ";
      break;
  }
  switch (day) {
    case 1:
    case 21:
    case 31:
      humanDate += day + "st, " + year;
      break;
    case 2:
    case 22:
      humanDate += day.toString() + "nd, " + year;
      break;
    case 3:
    case 23:
      humanDate += day + "rd, " + year;
      break;
    default:
      humanDate += day.toString() + "th, " + year;
      break;
  }
  return humanDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));