const router = require('express').Router();

const talkers = require('../middlewares/getTalkers');

router.get('/', talkers);

module.exports = router;