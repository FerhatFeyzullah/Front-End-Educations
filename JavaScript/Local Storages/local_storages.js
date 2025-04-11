

var firstName;

// kullanim sekli 1
firstName = localStorage.setItem('firstName', 'Ferhat');

// kullanim sekli 2
var age = localStorage.setItem('age', '23');

// silme yontemi
//localStorage.removeItem('firstName');


console.log(localStorage);

// cagirma yontemi
console.log(localStorage.getItem('age'));