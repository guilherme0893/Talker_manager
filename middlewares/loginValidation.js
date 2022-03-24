const loginValidation = (req, res) => {
  // https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28;
  const newToken = Math.random().toString(10).substring(2, 18); // .length ---> 16 substring remove o que vem antes do zero, 18-2 
  return res.status(200).json({ token: newToken });
};

// const newToken = Math.random().toString(10).substring(2, 18);
// console.log(newToken);
// console.log(newToken.length);

module.exports = loginValidation; // inverter o nome com o tokenvalidation
