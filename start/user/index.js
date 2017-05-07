const log = require('./../logger')(module);
const db = require('./../db');
db.connect();

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log(db.getPhrases('Hello'), who.name);
};

// global.User = User;
module.exports = User;