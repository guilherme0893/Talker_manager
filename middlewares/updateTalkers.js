const fileWriter = require('../services/fileWriter');
const fileReader = require('../services/fileReader');

const updateTalker = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const talkers = await fileReader('./talker.json');
  const filterTalkerById = talkers.filter((talker) => talker.id !== Number(id));
  const newTalker = {
    ...body,
    id: Number(id),
  };
  const addChanges = [...filterTalkerById, newTalker];
  await fileWriter('./talker.json', addChanges);
  return res.status(200).json(newTalker);
};

module.exports = updateTalker;
