const talkValidation = (req, res, next) => {
  // considerar também as keys e values do talk --- desestruturado nao passa
  const { talk } = req.body;
  if (!talk || talk.watchedAt === undefined || talk.rate === undefined) {
    return res.status(400)
      .json({ 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  next();
};

module.exports = talkValidation;
