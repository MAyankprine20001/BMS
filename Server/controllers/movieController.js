const Movie = require("../models/movieModal.js");

const addMovie = async (req, res) => {
  try {
    //create a movie document using the movie model and req.body
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).send({
      success: true,
      message: "Movie added successfully",
      movie: newMovie,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find({});
    res.status(200).send({
      success: true,
      message: "Movies fetched successfully",
      movies: allMovies,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.params.movieId, req.body);
    res
      .status(200)
      .send({ success: true, message: "Movie updated successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.movieId);
    res
      .status(200)
      .send({ success: true, message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = { addMovie, getAllMovies, updateMovie, deleteMovie };
