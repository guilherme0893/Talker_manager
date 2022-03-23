const fileWriter = require('./fileWriter');
const fileReader = require('./fileReader');

const talkersFile = './talker.json';

const addNewTalker = async (req, res) => {
  const talks = await fileReader(talkersFile);
  const { name, age, talk } = req.body;
  talks.push({ name, age, id: talks.length + 1, talk });
  await fileWriter('./talker.json', talks);
  return res.status(201).json({ name, age, id: talks.length, talk });
};

module.exports = addNewTalker;
