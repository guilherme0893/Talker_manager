const express = require('express');

const router = express.Router();

// get, getById, update, delete, search
const getTalkers = require('../controllers/talker/getTalkers');
const getTalkersById = require('../controllers/talker/getTalkersId');
const updateTalk = require('../controllers/talker/updateTalkers');
const deleteTalker = require('../controllers/talker/deleteTalker');
const searchTalker = require('../controllers/talker/talkerSearch');
// validations 
const newTalker = require('../services/addNewTalker');
const loginValidation = require('../middlewares/loginValidation');
const talkValidation = require('../middlewares/talkValidation');
const nameValidation = require('../middlewares/nameValidation');
const ageValidation = require('../middlewares/ageValidation');
const rateValidation = require('../middlewares/rateValidation');
const dateValidation = require('../middlewares/dateValidation'); 

router.get('/', getTalkers);

router.get('/search', loginValidation, searchTalker);

router.get('/:id', getTalkersById);

router.post('/', 
  loginValidation, 
  nameValidation, 
  ageValidation, 
  talkValidation, 
  rateValidation, 
  dateValidation, 
  newTalker);

router.put('/:id', 
  loginValidation, 
  nameValidation, 
  ageValidation, 
  talkValidation, 
  rateValidation, 
  dateValidation, 
  updateTalk);

router.delete('/:id',
  loginValidation, 
  deleteTalker);

module.exports = router;
