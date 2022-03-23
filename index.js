const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./middlewares/getTalkers');
const getTalkersById = require('./middlewares/getTalkersId');
const newTalker = require('./services/addNewTalker');
const emailValidation = require('./middlewares/emailValidation');
const passwordValidation = require('./middlewares/passwordValidation');
const loginValidation = require('./middlewares/loginValidation');
const tokenValidation = require('./middlewares/tokenValidation');
const talkValidation = require('./middlewares/talkValidation');
const nameValidation = require('./middlewares/nameValidation');
const ageValidation = require('./middlewares/ageValidation');
const rateValidation = require('./middlewares/rateValidation');
const dateValidation = require('./middlewares/dateValidation');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker/:id', getTalkersById);
app.get('/talker', getTalkers);
app.post('/login', emailValidation, passwordValidation, loginValidation);
app.post('/talker', tokenValidation, nameValidation, ageValidation, talkValidation, rateValidation,
  dateValidation, newTalker);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
