const db = require('db');
const User = require('./user');
// require('./user');

function run() {
    let vasya = new User('Vasya');
    let petya = new User('Petya');

    vasya.hello(petya);
    console.log(petya);
    console.log(typeof petya);

    console.log(db.getPhrases('Run successful'));
}

// console.log(module);

if (module.parent) {
    module.exports.run = run;
} else {
    run();
}