
function reverseString(str) {
  var ourString = str;
  str = ourString.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}

reverseString("hello");

