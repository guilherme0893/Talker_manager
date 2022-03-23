const tokenValidation = (req, res, next) => {
  // https://www.geeksforgeeks.org/basic-authentication-in-node-js-using-http-header/;
  const { authorization } = req.headers;
  if (!authorization || authorization === '') {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length < 16 || typeof authorization !== 'string') {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

module.exports = tokenValidation;
