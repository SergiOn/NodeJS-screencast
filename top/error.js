const util = require('util');

const phrases = {
    'Hello': 'Привет',
    'world': 'мир'
};

function getPhrase(name) {
    if (!phrases[name]) {
        throw new Error('We haven`t phrase:', name);
    }
    return phrases[name];
}

function makePage(url) {
    if (url !== 'index.html') {
        throw new Error('We haven`t that page');
    }
    return util.format('%s, %s!', getPhrase('Hello'), getPhrase('world'))
}

let page = makePage('index.html');
console.log(page);