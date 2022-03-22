const fs = require('fs').promises;

// https://nodejs.dev/learn/writing-files-with-nodejs
// https://www.geeksforgeeks.org/node-js-fs-writefile-method/
const fileWriter = async (path, file) => {
  try {
    await fs.writeFile(path, JSON.stringify(file));
    return file;
  } catch (error) {
    console.error(error);
  }
};

module.exports = fileWriter;
