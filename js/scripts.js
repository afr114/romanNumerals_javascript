var romanNumeral = function(number) {
var m = []
var d = []
var c = []
var l = []
var x = []
var v = []
var i = []


while (number >= 1000) {
  number -= 1000;
  m.push("M");
} if (m.length >= 4) {
  return "Numbers over 3,999 don't exist.";
}
while (number >= 500) {
  number -= 500;
  d.push("D");
}
while (number >= 100) {
  number -=100;
  c.push("C");
}
while (number >= 50) {
  number -= 50;
  l.push("L");
}
while (number >= 10) {
  number -= 10;
  x.push("X");
}
while (number >= 5) {
  number -= 5;
  v.push("V");
}
while (number >= 1) {
  number -=1;
  i.push("I")
}

var numerals = m.concat(d, c, l, x, v, i);
return numerals.join().replace(/[^a-z0-9\s]/gi, '');
};







// if (number === 1) {
//   return "I";
// }
// else {
//   (number === 5)
// } return "V";
