const fs = require('fs').promises;

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  try {
    const file = await fs.readFile('./talker.json', 'utf-8');
    const talkers = JSON.parse(file);
    const filterTalkerById = talkers.filter((talker) => talker.id !== Number(id));
    await fs.writeFile('./talker.json', JSON.stringify(filterTalkerById));
    res.status(204).end();
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteTalker;
