const User = require('./user').User;
// require('./user');

function run() {
    let vasya = new User('Vasya');
    let petya = new User('Petya');

    vasya.hello(petya);
    console.log(petya);
    console.log(typeof petya);
}

console.log(module);

if (module.parent) {
    module.exports.run = run;
} else {
    run();
}