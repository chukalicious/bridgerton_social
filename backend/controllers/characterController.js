const asyncHandler = require('express-async-handler');
const Characters = require('../models/charactersModel');

const getCharacters = asyncHandler(async (req, res) => {
  const characters = await Characters.find();
  res.status(200).json(characters);
});

const getCharactersByID = asyncHandler(async (req, res) => {
  const user = await Characters.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports = { getCharacters, getCharactersByID };
