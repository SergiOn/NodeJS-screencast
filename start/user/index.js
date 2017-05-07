const db = require('./../db');
db.connect();

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(db.getPhrases('Hello'), who.name);
};

// global.User = User;
module.exports = User;