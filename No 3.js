// ======== Count Char =========

function charCount(str, c) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == c) {
      count += 1;
    }
  }
  return count;
}

console.log(charCount('arkademy', 'k'));
