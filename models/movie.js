const mongoose = require('mongoose');


const actorSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },

});


const movieSchema = new mongoose.Schema({
    Title: {
        required: true,
        type: String,
        minLength: 1,
        maxLength: 150
    },
    Director: {
        required: true,
        type: String,
        minLength: 3,
        maxLength: 50
    },
    Genre: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gener',
        required: true
    }],
    MovieAvailable: {
        type: Number,
        required: true
    },
    Actors: [actorSchema]
});

const Movie = mongoose.model('Movie', movieSchema);


exports.movieSchema = movieSchema;
exports.Movie = Movie;