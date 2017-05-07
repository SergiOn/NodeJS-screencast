let phrases;

module.exports.connect = function () {
    phrases = require('./ru');
};

exports.getPhrases = function (name) {
    if (!phrases[name]) {
        throw new Error('We haven`t phrase:', name);
    }
    return phrases[name];
};