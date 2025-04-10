var trafikte_Kalinan_Sure = new Date(2021, 4, 20);
console.log(trafikte_Kalinan_Sure);
var gecenSure = Date.now() - trafikte_Kalinan_Sure.getTime();

var tarfiktekiGun = Math.floor(gecenSure / 1000 / 60 / 60 / 24);
console.log(tarfiktekiGun);

if (tarfiktekiGun <= 365) {
    console.log('1. Bakim Yili Geldi');
}
else if (tarfiktekiGun > 365 && tarfiktekiGun <= 365 * 2) {
    console.log('2. Bakim Yili Geldi');
}
else if (tarfiktekiGun > 365 * 2 && tarfiktekiGun <= 365 * 3) {
    console.log('3. Bakim Yili Geldi');
}
else {
    console.log('Bilinmeyen bir sure');
}


//kullanici girisi


var user = prompt('Kimsin ?');

if (user == "admin") {

    var pass = prompt("Sifre Gir");
    if (pass == "huhu") {
        console.log("Hosgeldin admin");
    }
    else { console.log("sifre yanlis"); }
}
else if (user == "cikis") {
    console.log("cikis yapildi");
}
else { console.log("Seni taniyamadim"); }