const express = require('express');

const router = express.Router();

const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const loginValidation = require('../middlewares/tokenValidation');

router.post('/', emailValidation, passwordValidation, loginValidation);

module.exports = router;
