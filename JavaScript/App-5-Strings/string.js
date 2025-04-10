var sentence = "             Bir Yazılım sayesinde bir bilgisayar bir metin dosyasını açabilir, bir - resim dosyasını düzenleyebilir veya bir internet taraması yapabilir.    ";

console.log(sentence);

var url = "https://www.youtube.com/watch?v=6uSiI6ynMGI&list=PLXuv2PShkuHws6qBQiX1fwEdBA25XOze-&index=17";


console.log("Cumle icindeki karakter sayisi :", sentence.length);

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

console.log(sentence.trim());
//trim ile bastaki ve sondaki bosluklari aldik,
//split ile parantez icinde belirledigimizi string ten attik ve string i listeye cevirdik
//lenght ile de kalanin uzunlugunu almis olduk
console.log(sentence.trim().split(' ').length);

//replace ile "-" yi cikartip yerine ne koymak istersek onu koyduk yani hicbirsey cunku silmek istedik.
console.log(sentence.replace('-', ''));

//string in basini kontrol etme
console.log(url.startsWith('http:'));
console.log(url.startsWith('https:'));

//string icinde arama yapma
console.log(sentence.indexOf("Bir"));
console.log(sentence.includes("bir"));

//slice kesip cikarmak icindir iki deger alir, bas ve son eger sadece bir tane girersen basi 0 kabul eder.
console.log(url.slice(34));








