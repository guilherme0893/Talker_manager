const crypto = require('crypto');

const token = () => crypto.randomBytes(8).toString('hex');

console.log(token());
console.log(token().length);

module.exports = token;

// https://nodejs.org/api/crypto.html
