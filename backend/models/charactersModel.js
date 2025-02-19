const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      // required: true,
    },
    Actor: {
      type: String,
      // required: true,
      // unique: true,
    },
    imageURL: {
      type: String,
    },
    RoleTitle: {
      type: String,
    },
    Family: {
      type: String,
    },
    RelationshipStatus: {
      type: String,
    },
    NotableTraits: {
      type: [String],
    },
    Personality: {
      type: String,
    },
    RomanticInterests: {
      type: [String],
    },
    KeyEpisodes: {
      type: [String],
    },
    id: {
      type: Number,
    },
  },
  {
    collection: 'info',
  }
);

const Character = mongoose.model('info', characterSchema);

module.exports = Character;
