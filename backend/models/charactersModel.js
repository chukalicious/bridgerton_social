const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  actor: {
    type: String,
    // required: true,
    // unique: true,
  },
  imgURL: {
    type: String,
  },
  roleTitle: {
    type: String,
  },
  family: {
    type: String,
  },
  relationshipStatus: {
    type: String,
  },
  notableTraits: {
    type: [String],
  },
  personality: {
    type: String,
  },
  romanticInterests: {
    type: [String],
  },
  keyEpisodes: {
    type: [String],
  },
  hobbies: {
    type: [String],
  },

  scandals: {
    type: [String],
  },
  achievements: {
    type: [String],
  },
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
