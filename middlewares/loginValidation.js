const loginValidation = (req, res, next) => {
  // https://www.geeksforgeeks.org/basic-authentication-in-node-js-using-http-header/;
  const { authorization } = req.headers;
  // console.log(req.headers, 'oi');
  if (!authorization || authorization === '') {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

module.exports = loginValidation;
