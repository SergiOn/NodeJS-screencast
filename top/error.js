const util = require('util');

const phrases = {
    'Hello': 'Привет',
    'world': 'мир'
};


function PhraseError(message) {
    this.message = message;
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';


function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError(`We haven\`t phrase: ${name}`); // HTTP 500
    }
    return phrases[name];
}

function makePage(url) {
    if (url !== 'index.html') {
        throw new HttpError(404, 'We haven`t that page'); // HTTP 404
    }
    return util.format('%s, %s!', getPhrase('Hell'), getPhrase('world'))
}

try {
    let page = makePage('index');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error(e);
    }
}

try {
    let page = makePage('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error('Error %s\n message: %s\n stack: %s', e.name, e.message, e.stack);
    }
}
