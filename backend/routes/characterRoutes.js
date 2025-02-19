const express = require('express');
const router = express.Router();

const {
  getCharacters,
  getCharactersByID,
} = require('../controllers/characterController');

router.route('/').get(getCharacters);
router.route('/:id').get(getCharactersByID);

module.exports = router;
