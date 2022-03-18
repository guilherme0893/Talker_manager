const getTalkers = require('../services/getTalker');

async function getTalkerId(req, res) {
  try {
    const { id } = req.params;
    const talkers = await getTalkers();
    const answer = talkers.find((talker) => talker.id === id);
    if (!answer) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(answer);
  } catch (err) {
    console.error(err);
  }
}

getTalkerId(1);

module.exports = getTalkerId;
