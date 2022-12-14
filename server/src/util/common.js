const bcrypt = require('bcrypt');

const error = require('./error');

const cleanObj = (obj) => {
    for (const propName in obj) {
        if (obj[propName] === undefined || obj[propName] === null) {
            delete obj[propName];
        }
    }
    return obj;
};

const requestBodyAllowed = ({ allowedFields = [], obj }) => {
    const keys = Object.keys(obj);
    for (let index = 0; index < keys.length; index += 1) {
        const key = keys[index];
        if (!allowedFields.includes(key)) {
            throw error.InvalidBodyError(key);
        }
    }
    return true;
};


function randBuffer(n) {
    const b = Buffer.alloc(n);
    for (let i = 0; i < b.length; i += 1) {
        // eslint-disable-next-line no-magic-numbers
        b[i] = Math.round(Math.random() * 1000) % 255;
    }
    return b;
}

function randString(n, pool) {
    let p;
    if (!pool) {
        // default: a-zA-Z0-9
        p = '1VpKHhEPxbGltO3IodAfya9D7q4JNjLYeST0UiRmvkwrBnQcFCMs256XWZgzu8';
    } else {
        p = pool;
    }
    let newString = '';
    const list = randBuffer(n);
    for (let i = 0; i < list.length; i += 1) {
        const c = list[i] % p.length;
        newString += p[c];
    }
    return newString;
}

module.exports = {
    cleanObj,
    requestBodyAllowed,
    checkInvite,
    randString,
};
