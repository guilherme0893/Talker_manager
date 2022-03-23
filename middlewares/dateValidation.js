const dateValidation = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const validation = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  if (!watchedAt.match(validation)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato dd/mm/aaaa' });
  }
  if (!watchedAt || watchedAt === '') {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  next();
};

module.exports = dateValidation;