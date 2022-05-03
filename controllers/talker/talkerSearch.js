const fileReader = require('../../services/fileReader');

const talkerSearch = async (req, res) => {
  try {
    const { q } = req.query;
    const talkers = await fileReader('./talker.json');
    const lowerCaseTerm = q.toLowerCase();
    const searchedTalker = talkers
      .filter((talker) => talker.name.toLowerCase().includes(lowerCaseTerm));
    // console.log(searchedTalker);
    return res.status(200).json(searchedTalker);
  } catch (error) {
    console.error(error);
    return res.status(200).json([]);
  }
};

module.exports = talkerSearch;
