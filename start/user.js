const phrases = require('./ru');

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(phrases.Hello, who.name);
};

// global.User = User;
exports.User = User;