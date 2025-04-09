var num = 12.435464758;

var aralik = 100;

console.log(num.toPrecision(3));
console.log(num.toFixed(3));


console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));


console.log(Math.min(1, 2, 10, 56, 20));

console.log(Math.max(1, 2, 10, 56, 20));

aralik = Math.random() * aralik + 1;
console.log(parseInt(aralik));

var mesai;
mesai = 42 * 10.3;
mesai += 3700;
console.log('kesintisiz maas:', mesai.toFixed(2));

var kesinti = mesai * 25 / 100;
mesai -= kesinti;

console.log('maas in son hali: ', mesai.toFixed(2));
