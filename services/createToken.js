const crypto = require('crypto');

function createCrypto() {
  return crypto.randomBytes(16).toString();
}

module.exports = createCrypto;

// https://nodejs.org/api/crypto.html
