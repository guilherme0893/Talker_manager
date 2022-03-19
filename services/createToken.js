const crypto = require('crypto');

function createCrypto() {
  return crypto.randomBytes(16).toString('hex');
}

module.exports = createCrypto;

// https://nodejs.org/api/crypto.html
