const util = require('util');

const obj = {
    a: 5,
    b: 6,
    inspect() {
        return 123;
    }
};
obj.self = obj;

console.log(util.inspect(obj));