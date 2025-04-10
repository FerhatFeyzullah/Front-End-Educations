


var hesapBilgilerim = {
    ad: "Ferhat",
    hesapNo: 123456789,
    bakiye: 5000,
    ekBakiye: 3000
}

function paraCek(hesap, miktar) {
    console.log(`Merhaba ${hesap.ad} Bey`);
    if (miktar < hesap.bakiye) {
        console.log(`Paranizi alabilirsiniz, Guncel Bakiyeniz: ${hesap.bakiye -= miktar}`);

    }
    else {
        var toplamPara = hesap.bakiye + hesap.ekBakiye;
        if (miktar <= toplamPara) {
            if (confirm('Ek hesabinizdaki parayi da somurmek ister misiniz?')) {
                console.log(`Paranizi Alabilirsiniz ${hesap.ad} Bey.`);
            }
            else { console.log('Ana Hesabinizda Yeterli Bakiye Bulunmamaktadir.'); }
        }
        else { console.log(`Yetersiz Bakiye`); }

    }




}
paraCek(hesapBilgilerim, 8000);