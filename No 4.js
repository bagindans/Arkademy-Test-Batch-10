// ============== Cross ============

var n = 5;
var s = [];

for (var i = 0; i < n; i++) {
  for (var j = 0; j < n; j++) {
    if (i == j || j == n - i - 1) {
      s[j] = 'x';
    } else {
      s[j] = '=';
    }
  }
  console.log(s);
}
