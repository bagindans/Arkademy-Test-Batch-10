// =========== Minmax ============

var data = ['h', 'g', 'a', 'b', 'd', 'f'];
minmax(data);

function minmax(a) {
  var x, i, y;
  x = a[0];

  a.forEach(function(val, key) {
    if (x > val) {
      x = val;
      i = key;
    }
    if (x < val && key > i) {
      y = val;
    } else {
      y = null;
    }
  });

  console.log([x, y]);
}
