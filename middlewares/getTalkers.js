const getTalkers = require('../services/getTalker');

async function getTalker(req, res) {
  try {
    const talkers = await getTalkers();
    return res.status(200).json(talkers);
  } catch (err) {
    console.error(err);
  }
}

module.exports = getTalker;
