const fs = require('fs').promises;

const getTalkers = async () => {
  try {
    const talkers = await fs.readFile('./talker.json', 'utf8');
    return JSON.parse(talkers);
  } catch (err) {
    console.error(err);
  }
};

module.exports = getTalkers;
