var val;

var number = new Map();
   
number.set(1,'one');
number.set('two',2);
number.set('three','three');

val = number;


console.log(val);

console.log(number.has('two'));
console.log(number.size);
console.log(number.get('three'));

for (var [a,b] of number){
    console.log(a + ' - ' + b);
}
for (var a of number.keys()){
    console.log(a);
}
for (var b of number.values()){
    console.log(b);
}

var first = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three'],
]);

var second = new Map([
    [4,'four'],
    [5,'five'],
]);

var merged = new Map([...first,...second]);

console.log(merged);
