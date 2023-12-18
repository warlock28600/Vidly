const express = require('express');
const router = express.Router();
const genres = require('./genres');
const gender = require('./gender');
const person = require('./person');
const movie = require('./movie');


router.use('/genres', genres);
router.use('/person', person);
router.use('/gender', gender);
router.use('/movie', movie);


module.exports = router;