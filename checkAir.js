const checkAir = function (samples, threshold) {
  let dirty = 0;
  samples.forEach(function (air) {
    if (air == 'dirty') {
      dirty++;
    }
  });
  let quality = dirty / samples.length;
  if (quality > threshold) {
    return "Polloted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));