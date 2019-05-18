//  ======= Biodata JSON =========
function bioJSON() {
  var biodata = {
    name: "Baginda Syarif",
    address: "Puri Pamulang Blok F2 No 6, Tangerang Selatan",
    isMarried: false,
    school: "SMAN 6 Kota Tangerang Selatan",
    skills: [
      {
        name: "public speaking",
        score: 8
      },
      {
        name: "writing",
        score: 7
      },
      {
        name: "coding",
        score: 6
      }
    ]
  }

  return JSON.stringify(biodata)
}

console.log(bioJSON())

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
