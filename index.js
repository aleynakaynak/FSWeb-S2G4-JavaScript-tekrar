function CemberinCevresi(yaricap) {
  return 2 * pi * yaricap;
}

function CemberinAlani(yaricap, pi) {
  return pi * Math.pow(yaricap, 2);
}

console.log("Çemberin çevresi (r=5):", CemberinCevresi(5));
console.log("Çemberin alanı (r=15):", CemberinAlani(15, pi));

// 3a
enbuyuk = sayilar[0];
enkucuk = sayilar[0];

for (let i = 1; i < sayilar.length; i++) {
  if (sayilar[i] > enbuyuk) enbuyuk = sayilar[i];
  if (sayilar[i] < enkucuk) enkucuk = sayilar[i];
}

// 3b
ucetambolunenler = [];
sayilar.forEach((sayi) => {
  if (sayi % 3 === 0) {
    ucetambolunenler.push(sayi);
  }
});

// 3c
ucebolunenlerintoplami = ucetambolunenler.reduce((acc, val) => acc + val, 0);

// 3d
besyuzdenkucuksayilar = sayilar.filter((sayi) => sayi < 500);

// 3e
siralisayilar = [...besyuzdenkucuksayilar].sort((a, b) => a - b);

// 3f
tekraredensayilar = [];
const sayac = {};

sayilar.forEach((sayi) => {
  const key = sayi.toString();
  sayac[key] = (sayac[key] || 0) + 1;
});

for (let sayi in sayac) {
  if (sayac[sayi] > 1) {
    tekraredensayilar.push(`${sayi} sayısı ${sayac[sayi]} kere tekrar edilmiştir`);
  }
}

console.log("Sayılar dizisindeki toplam eleman sayısı:", sayilar.length);

/*  Bu satırın aşağısındaki kodları lütfen değiştirmeyin  */

function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();

module.exports = {
  sa,
  CemberinCevresi,
  CemberinAlani,
  ucetambolunenler,
  enbuyuk,
  enkucuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar,
};

