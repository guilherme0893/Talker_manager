const emailValidation = (req, res) => {
// email validatio https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
const emailValidationRegex = /\S+@\S+\.\S+/;
const { email } = req.body;
  if (!email) {
    return res.status(404).json({ message: 'O campo email é obrigatório' });
  }
  if (!email.match(emailValidationRegex)) {
    return res.status(404).json({ message: 'O email deve ter o formato \"email@email.com\"' });
  }
  
};

const passwordValidation = (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(404).json({ message: 'O campo \"password\" é obrigatório' });
  }
  if (password.length > 6) {
    return res.status(404).json({ message: 'O \"password\" deve ter pelo menos 6 caracteres' });
  }
};

module.exports = {
  emailValidation,
  passwordValidation,
};
