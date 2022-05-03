const fileWriter = require('./fileWriter');
const getTalkers = require('./getTalker');

const talkerFile = './talker.json';

const addNewTalker = async (req, res) => {
  try {
    const talks = await getTalkers();
    const { name, age, talk } = req.body;
    talks.push({ id: talks.length + 1, name, age, talk });
    fileWriter(talkerFile, talks);
    return res.status(201).json({ id: talks.length, name, age, talk });    
  } catch (error) {
    console.error(error);
  }
};

module.exports = addNewTalker;
