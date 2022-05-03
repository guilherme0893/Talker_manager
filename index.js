const express = require('express');
const bodyParser = require('body-parser');

const loginRoutes = require('./routers/loginRoutes');
const talkersRoutes = require('./routers/talkersRoutes');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use('/login', loginRoutes);
app.use('/talker', talkersRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
