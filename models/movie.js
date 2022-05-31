const mongoose = require("mongoose");
const { isURL } = require("validator");
const errorMessages = require("../utils/error-messages");

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },

    director: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    year: {
      type: [String],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
      validate: {
        validator: (v) => isURL(v),
        message: errorMessages.BadUrl,
      },
    },

    trailer: {
      type: String,
      required: true,
      validate: {
        validator: (v) => isURL(v),
        message: errorMessages.BadUrl,
      },
    },

    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator: (v) => isURL(v),
        message: errorMessages.BadUrl,
      },
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    movieId: {
      type: Number,
      required: true,
    },

    nameRU: {
      type: String,
      required: true,
    },

    nameEN: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("movie", movieSchema);
