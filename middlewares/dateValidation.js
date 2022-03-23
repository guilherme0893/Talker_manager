const dateFormatCheck = (date) => {
  // https://www.regextester.com/99555  
  const validation = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  return validation.test(date);
};

const dateValidation = (req, res, next) => {
  const { talk } = req.body;
  if (dateFormatCheck(talk.watchedAt) === false) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = dateValidation;
