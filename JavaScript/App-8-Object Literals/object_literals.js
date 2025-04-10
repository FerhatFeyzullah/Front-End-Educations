var kayitdefteri = [

    {
        id: "bmw116d_1234",
        model: "116d",
        yil: 2015,
        renk: "beyaz",
        servis_kayitlari: [
            {
                id: "bmw116d_1234_1",
                tarih: new Date(2016, 1, 30),
                km: 13000,
                toplam_Ucret: 800,
                servis_detayi:
                    [
                        { id: "islem1_bmw116d_1234_1", aciklama: "Yag Degisimi", ucret: 300 },
                        { id: "islem1_bmw116d_1234_2", aciklama: "fren_Hidroligi", ucret: 500 }
                    ]
            },
            {
                id: "bmw116d_1234_2",
                tarih: new Date(2017, 1, 30),
                km: 25000,
                toplam_Ucret: 2200,
                servis_detayi:
                    [
                        { id: "islem2_bmw116d_1234_1", aciklama: "Balata Degisimi", ucret: 1300 },
                        { id: "islem2_bmw116d_1234_2", aciklama: "Filtre_Degisimi", ucret: 900 }
                    ]
            }
        ]

    },
    {
        id: "bmw118i_1234",
        model: "118i",
        yil: 2016,
        renk: "siyah",
        servis_kayitlari: [
            {
                id: "bmw118i_1234_1",
                tarih: new Date(2017, 1, 30),
                km: 13000,
                toplam_Ucret: 1900,
                servis_detayi:
                    [
                        { id: "islem1_bmw118i_1234_1", aciklama: "Yag Degisimi", ucret: 400 },
                        { id: "islem1_bmw118i_1234_2", aciklama: "fren_Hidroligi", ucret: 1500 }
                    ]
            },
            {
                id: "bmw118i_1234_2",
                tarih: new Date(2018, 1, 30),
                km: 25000,
                toplam_Ucret: 1100,
                servis_detayi:
                    [
                        { id: "islem2_bmw118i_1234_1", aciklama: "Balata Degisimi", ucret: 1000 },
                        { id: "islem2_bmw118i_1234_2", aciklama: "Filtre_Degisimi", ucret: 100 }
                    ]
            }
        ]

    },
]

console.log(kayitdefteri[0].servis_kayitlari[0].servis_detayi);

