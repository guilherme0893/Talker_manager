const router = require('express').Router();

const talkers = require('../middlewares/getTalkersId');

router.get('/:id', talkers);

module.exports = router;