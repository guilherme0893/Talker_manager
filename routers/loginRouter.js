const router = require('express').Router();
const { emailValidation, 
  passwordValidation, tokenValidation } = require('../middlewares/loginInfoConfirmation');

router.post('/login', emailValidation, passwordValidation, tokenValidation);

module.exports = router;
