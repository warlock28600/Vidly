const express = require('express');
const router = express.Router();
const {Movie, movieSchema} = require('../../models/movie');


router.use(express.json());

router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.send(movies);
});


module.exports = router;


