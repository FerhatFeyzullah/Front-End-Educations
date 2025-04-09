var customerName = 'Huhu';
var customerLastname = 'Feyzullah';
var customerID = 12345678901;
var customerOrderTotalPrice = 300;
var gender = 'Erkek';

//obje
var addressInfo = {
    city: 'Sakarya',
    discrict: 'Ferizli'
}

var order1 = 30.1;
var order2 = 123.56;

var totalOrder1 = (order1 + order2);

console.log(totalOrder1); //ondalikli oran
console.log(parseInt(totalOrder1)); //ondaliksiz oran

//array
var hobiler = ['Kod Yazmak', 'Tasarim', 'Uyumak'];

var slogan = 'Gel vatandas gel, ucuza gel';

console.log(slogan);
console.log(slogan.length);

const birthYear = 2002;

console.log(new Date().getFullYear() - birthYear);

console.log(addressInfo);

