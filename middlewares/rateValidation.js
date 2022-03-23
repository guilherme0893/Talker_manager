const rateValidation = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;
  // radix problema de novo ----> garantir que o parseInt gera um numero na base 10
  // https://stackoverflow.com/questions/6611824/why-do-we-need-to-use-radix-parameter-when-calling-parseint
  if (parseInt(rate, 10) <= 0 || parseInt(rate, 10) > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  if (rate === undefined || rate === '') {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  next();
};

module.exports = rateValidation;
