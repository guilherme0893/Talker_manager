const fs = require('fs').promises;

// https://nodejs.dev/learn/reading-files-with-nodejs
// https://www.geeksforgeeks.org/node-js-fs-readfile-method/
const fileReader = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const file = await JSON.parse(data);
    return file || [];
  } catch (error) {
    console.error(error);
  }
};

module.exports = fileReader;
