//  ======= Biodata JSON =========
function bioJSON() {
  var biodata = {
    name: 'Baginda Syarif',
    address: 'Puri Pamulang Blok F2 No 6, Tangerang Selatan',
    isMarried: false,
    school: 'SMAN 6 Kota Tangerang Selatan',
    skills: [
      {
        name: 'public speaking',
        score: 8
      },
      {
        name: 'writing',
        score: 7
      },
      {
        name: 'coding',
        score: 6
      }
    ]
  };

  return JSON.stringify(biodata);
}

console.log(bioJSON());
