const getTalkers = require('../../services/getTalker');

async function getTalkerId(req, res) {
  try {
    const { id } = req.params;
    const talkers = await getTalkers();
    const answer = talkers.find((talker) => talker.id === parseInt(id, Number)); // erro de radix encontrado anteriormente
    // https://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter
    if (!answer) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(answer);
  } catch (err) {
    console.error(err);
  }
}

module.exports = getTalkerId;
