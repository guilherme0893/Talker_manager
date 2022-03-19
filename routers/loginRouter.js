const router = require('express').Router();
const { emailValidation, passwordValidation } = require('../middlewares/loginInfoConfirmation');
const createCrypto = require('../services/createToken');

router.post('/', emailValidation, passwordValidation, (req, res) => {
  res.status.apply(200).json({ token: createCrypto });
});

module.exports = router;
