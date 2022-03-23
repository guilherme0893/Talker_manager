const fs = require('fs').promises;

const addToken = async (token) => {
  try {
    return await fs.writeFile('./token.json', JSON.stringify(token));
  } catch (error) {
    console.error(error);
  }
};

module.exports = addToken;
