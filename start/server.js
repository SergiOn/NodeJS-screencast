const User = require('./user').User;

let vasya = new User('Vasya');
let petya = new User('Petya');

vasya.hello(petya);
console.log(petya);
console.log(typeof petya);