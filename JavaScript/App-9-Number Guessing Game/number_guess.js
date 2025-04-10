var sayi = Math.floor(Math.random() * 11 + 1);
console.log(sayi);

var hak = 5;
var puan = 100;

while (hak > 0) {

    hak--;
    puan -= 20;
    var tahmin = Number(prompt('Lutfen tahmininizi yapin.'));

    if (tahmin == sayi) {
        puan += 20;
        console.log(`Tebrikler Sayiyi Bildiniz puanininz: ${puan}`);
        break;
    }
    else if (tahmin > sayi) {
        console.log('Asagi gel.');
    }
    else {
        console.log('Yukari gel.');
        4
    }

    if (hak == 0) {
        console.log('Hakkiniz Bitti.');
    }

}


