const tokenGenerator = () => {
  // https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28;
  const token = Math.random().toString(5).substring(2, 18); // .length ---> 16 substring remove o que vem antes do zero, 18-2 
  return token;
};

module.exports = tokenGenerator;