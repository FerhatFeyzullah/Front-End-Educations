var markalar = ["BMW", "Mercedes", 'Opel', 'Mazda'];

var rakamlar = [1, 2, 5, 80];

console.log(markalar);
console.log(markalar.length);
console.log(markalar[0], "Ve", markalar[3]);

//sona eleman ekleme
markalar.push('Renault');
console.log(markalar);

//basa eleman ekleme

markalar.unshift('Toyota')
console.log(markalar);




console.log(markalar.reverse());
console.log(markalar.sort());
console.log(markalar.indexOf("Opel"));
console.log(markalar.includes("Opel"));

var str = "Chevrolet,Dacia";
var arr = str.split(',');

var arr2 = markalar.concat(arr);
console.log(arr2);

//ilk parametre start index ikincisi kac tane silinmesi isteniyorsa
arr2.splice(6, 2);
console.log(arr2);



var studentA = ['Yigit', 'Bilgi', 2010];
var studentB = ['Sena', 'Turan', 1999]
var studentC = ['Ahmet', 'Turan', 1998]

//cok boyutlu dizi
var students = [studentA, studentB, studentC];

console.log(students);




