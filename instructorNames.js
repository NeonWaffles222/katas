const instructorWithLongestName = function (instructors) {
  let longest = {};
  let length = 0;
  for (let instructor of instructors) {
    if (instructor.name.length > length) {
      longest = instructor;
      length = instructor.name.length;
    }
  }
  return longest;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));