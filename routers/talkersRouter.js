const router = require('express').Router();

const talkers = require('../middlewares/getTalkers');
const talkersById = require('../middlewares/getTalkersId');

const newTalker = require('../middlewares/talkValidation');

const nameValidation = require('../middlewares/nameValidation');
const ageValidation = require('../middlewares/ageValidation');
const tokenValidation = require('../middlewares/tokenValidation');
const rateValidation = require('../middlewares/rateValidation');
const dateValidation = require('../middlewares/dateValidation');
const talkValidation = require('../middlewares/talkValidation');

router.get('/', talkers);

router.get('/:id', talkersById);

router.post('/talker', newTalker);

router.use(tokenValidation, 
  nameValidation, ageValidation, talkValidation, rateValidation, dateValidation);

router.post('/', tokenValidation, 
nameValidation, ageValidation, talkValidation, 
rateValidation, dateValidation);

// const addNewTalker = async (req, res) => {
//   const talks = await fileReader(talkersFile);
//   const { name, age, talk } = req.body;
//   talks.push({ name, age, id: talks.length + 1, talk });
//   await fileWriter('./talker.json', talks);
//   return res.status(201).json({ name, age, id: talks.length, talk });
// };

module.exports = router;
