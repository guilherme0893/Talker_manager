const router = require('express').Router();

const talkers = require('../middlewares/getTalkers');
const talkersById = require('../middlewares/getTalkersId');

router.get('/', talkers);

router.get('/:id', talkersById);

module.exports = router;
