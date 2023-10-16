//! taban ve yükseklik değerlerini parametre olarak alan bir üçgenin alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.

const taban = Number(prompt("Lütfen alanını hesaplamak istediğiniz üçgenin TABAN KENAR UZUNLUĞUNU CM değerinden giriniz."));
const yukseklik = Number(prompt("Lütfen alanını hesaplamak istediğiniz üçgenin YÜKSEKLİĞİNİ CM değerinden giriniz."));
let alan=0;

function alanHesaplama(taban,yukseklik) {
  return alan = (taban*yukseklik)/2 ;
}

alanHesaplama(taban,yukseklik); 
console.log(`Hesapladığınız üçgenin alanı ${alan}`);


//! "kareAl" "küpAl" "üsAl" şeklinde üç adet farklı "arrow fonksiyonu" tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndüren fonksiyon yazın.

//! **************** KARE ALMA *****************

const sayi = Number(prompt("Lütfen KARESİNİ almak istediğiniz SAYIYI giriniz."));

let kareAl=0;

function kareHesaplama() {
  return kareAl = sayi**2 ;
}

kareHesaplama();
console.log(`Hesapladığınız sayının karesi ${kareAl}`);


//! **************** KÜP ALMA *****************

const sayi = Number(prompt("Lütfen KÜPÜNÜ almak istediğiniz SAYIYI giriniz."));

let kupAl=0;

function kupHesaplama() {
  return kupAl = sayi**3 ;
}

kupHesaplama();
console.log(`Hesapladığınız sayının küpü ${kupAl}`);


//! **************** ÜS ALMA *****************

const sayi = Number(prompt("Lütfen SAYIYI giriniz."));
const sayiUssu = Number(prompt("Lütfen ÜSSÜNÜ giriniz."));

let usAl=0;

function usHesaplama() {
  return usAl = sayi**sayiUssu ;
}

usHesaplama();
console.log(`Hesapladığınız sayının üssü ${usAl}`);