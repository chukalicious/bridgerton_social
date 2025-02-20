const asyncHandler = require('express-async-handler');
const Characters = require('../models/charactersModel');
const mongoose = require('mongoose');

const getCharacters = asyncHandler(async (req, res) => {
  const characters = await Characters.find();
  res.status(200).json(characters);
});

const getCharactersByID = asyncHandler(async (req, res) => {
  // Extract ID from Request Parameters:
  const { id } = req.params;
  console.log('what is this? ', req.params.id);
  // The function extracts the id parameter from the request URL.

  // Validate and convert the id to ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid ID format' });
  }
  // It checks if the provided id is a valid MongoDB ObjectId. If not, it responds with a 400 status code and an error message.

  /**
   * Retrieves a character by their ID.
   *
   * @param {string} id - The ID of the character to retrieve.
   * @returns {Promise<Object>} The character object if found, otherwise null.
   * @throws {Error} If there is an issue with the database query.
   */
  const user = await Characters.findById(new mongoose.Types.ObjectId(id));

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports = { getCharacters, getCharactersByID };
