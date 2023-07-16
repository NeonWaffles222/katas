const urlEncode = function (text) {
  let url = "";
  for (let x = 0; x < text.length; x++) {
    //To ignore spaces at the start or end of the text. 
    if ((x === 0 && text[x] === " ") || (x === text.length - 1 && text[x] === " ")) {
    } else if (text[x] === " ") {
      url += "%20";
    } else {
      url += text[x];
    }
  }
  return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));