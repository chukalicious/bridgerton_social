const express = require('express');
const router = express.Router();

const {
  getCharacters,
  getCharactersByID,
  addLikeToCharacter,
  downvoteCharacter,
} = require('../controllers/characterController');

router.route('/').get(getCharacters);
router.route('/:id').get(getCharactersByID);
router.post('/:id/like', addLikeToCharacter);
router.post('/:id/downvote', downvoteCharacter);

module.exports = router;
