const router = require('express').Router();
const { emailValidation, passwordValidation } = require('../middlewares/loginInfoConfirmation');
const token = require('../services/createToken');

router.post('/', emailValidation, passwordValidation, (req, res) => {
  res.status(200).json({ token: token() });
});

module.exports = router;
