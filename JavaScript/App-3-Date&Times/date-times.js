var currentDate = new Date();
console.log(currentDate);

var dateObject = new Date(2002, 5, 24, 15, 21, 33);

console.log("Dogum Tarihim :", dateObject);

var dtA = new Date('1990, 1, 1');

var gun;
gun = dtA.getDate();
dtA.setDate(gun - 1);
console.log(dtA);

var tarih1 = new Date(2025, 3, 9);
var tarih2 = new Date(2002, 6, 1);

var ms = tarih2 - tarih1;

ms = ms / 1000;
ms = ms / 60;
ms = ms / 60;
ms = ms / 24;
ms = ms / 365;


console.log(ms);

var annelerGunu = new Date(2019, 4, 1);

console.log(annelerGunu);
var kutlamagunu;

while (annelerGunu.getDay() != 0) {
    annelerGunu.setDate(annelerGunu.getDate() + 1);
}
annelerGunu.setDate(annelerGunu.getDate() + 7);
console.log(annelerGunu);






