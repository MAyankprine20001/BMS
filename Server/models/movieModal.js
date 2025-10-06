const moogoose = require("mongoose");

const movieSchema = new moogoose.Schema(
  {
    movieName: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    genre: { type: String, required: true },
    language: { type: String, required: true },
    releaseDate: { type: String, required: true },
    poster: { type: String, required: true },
  },
  { timestamps: true }
);

const movieModel = moogoose.model("movies", movieSchema);

module.exports = movieModel;
