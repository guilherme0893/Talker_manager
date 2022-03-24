const fs = require('fs');

// https://nodejs.dev/learn/writing-files-with-nodejs
// https://www.geeksforgeeks.org/node-js-fs-writefile-method/
const fileWriter = async (path, file) => fs.writeFileSync(path, JSON.stringify(file, null, 2));
  // return writeFile;

module.exports = fileWriter;
