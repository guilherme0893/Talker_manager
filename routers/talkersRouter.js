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
// const ageAndNameValidation = require('../middlewares/ageAndNameValidation');
// const dateAndRateValidation = require('../middlewares/dateAndRateValidation');

const updateTalker = require('../middlewares/updateTalkers');

router.get('/', talkers);

router.get('/:id', talkersById);

router.post('/talker', newTalker);

router.use(tokenValidation, 
  nameValidation, ageValidation, talkValidation, rateValidation, dateValidation);

router.post('/', tokenValidation, 
nameValidation, ageValidation, talkValidation, 
rateValidation, dateValidation);

// router.post('/', ageAndNameValidation, talkValidation, dateAndRateValidation, tokenValidation);

router.put('/talker/:id', updateTalker);

// module.exports = router;
