const fs = require('fs');

// https://nodejs.dev/learn/writing-files-with-nodejs
// https://www.geeksforgeeks.org/node-js-fs-writefile-method/
const fileWriter = async (path, file) => {
  try {
    return fs.writeFileSync(path, JSON.stringify(file));
  } catch (error) {
    console.error(error);    
  }
};

module.exports = fileWriter;
