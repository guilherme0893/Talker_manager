const tokenValidation = (req, res) => {
  // https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28;
  const token = Math.random().toString(10).substring(2, 18); // .length ---> 16 substring remove o que vem antes do zero, 18-2 
  return res.status(200).json({ token });
};

const loginData = (req, res, next) => {
  const { email, password } = req.body;
// email validation https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
  const emailValidationRegex = /\S+@\S+\.\S+/;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!email.match(emailValidationRegex)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = { loginData, tokenValidation };
