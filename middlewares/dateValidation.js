const dateValidation = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;
  // https://www.regextester.com/99555  
  const validation = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (validation.test(watchedAt) === false) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = dateValidation;
