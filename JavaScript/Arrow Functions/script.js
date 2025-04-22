
///////////////////
var ES5_1 = function(){
    console.log('Merhaba ES5');
}
ES5_1();
//
var ES6_1 = ()=>{
    console.log('Merhaba ES6');
}
ES6_1();

////////////////////////
var multiplyES5 = function(x,y){
    return x*y;
}

console.log(multiplyES5(5,10));
//
var multiplyES6 = (x,y) => {return x*y;}
var multiplyES6_1 =(x,y) => x*y;
console.log(multiplyES6(5,10));
console.log(multiplyES6_1(3,9));

///////////////////////
var splitES5 = function(text){
    return text.split(' ');
}
console.log(splitES5('Huhu Arrow Functions Example'));
//
var splitES6 = (text) => {return text.split(' ');}
var splitES6_1 = (text) => text.split(' ');

console.log(splitES6('Huhu Arrow Functions Example'));
console.log(splitES6_1('Huhu Arrow Functions Example'));

///////////////////////
var productES5 = function(id,name){
    return {
        id : id,
        name : name
    }
}
console.log(productES5('1','Samsung S24'));
//
var productES6 = (id,name) => {return {id:id,name:name}}
console.log(productES6('1','Iphone 16e'));

//////////////////////////
const phones = [
    {name : 'Iphone 6',price : 3000},
    {name : 'Iphone 7',price : 4000},
    {name : 'Iphone 8',price : 5000},
    {name : 'Iphone 9',price : 6000},

]

var pricesES5 = phones.map(function(phone){
    return phone.price;
});

console.log(pricesES5);
//
var priceES6 = phones.map((phone)=>{
    return phone.price;
})

console.log(priceES6);
    
///////////////////////
const arr = [1,3,6,7,8,9,12,23,34,45,67];

var evenES5 = arr.filter(function(a) {
    return a%2==0;
})
console.log(evenES5);
//
var evenES6_1 = arr.filter((a)=>  { return a%2==0})
console.log(evenES6_1);

var evenES6_2 = arr.filter((a)=> a%2==0)
console.log(evenES6_2);





