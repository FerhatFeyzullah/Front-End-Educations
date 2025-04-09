
//Kilo 
const canKg = 75;
const adaKg = 50;

//Boy
const canBoy = 1.88;
const adaBoy = 1.65;

//Kisini kilosu / boy uzunlugunun karesi

var canIndeks = canKg / (canBoy * canBoy);
var adaIndeks = adaKg / (adaBoy * adaBoy);
console.log(canIndeks.toFixed(1), adaIndeks.toFixed(1));


//INDEKS
// 0 - 18,4 : Zayif
// 18,5 - 24,9 : Normal
// 25,0 - 29,9 : Fazla Kilolu
// 30,0 - 34,9 : Sisman(Obez)

var canZayif = canIndeks > 0 && canIndeks < 18.4;
var canNormal = canIndeks > 18.5 && canIndeks < 24.9;
var canFazlaKilolu = canIndeks > 25.0 && canIndeks < 29.9;
var canSisman = canIndeks > 30.0 && canIndeks < 34.9;

console.log("Can Zayif: ", canZayif);
console.log("Can Normal: ", canNormal);
console.log("Can Kilolu: ", canFazlaKilolu);
console.log("Can Sisman: ", canSisman);

