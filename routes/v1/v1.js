const express = require('express');
const router = express.Router();
const genres = require('./genres');
const gender = require('./gender');
const person = require('./person');


router.use('/genres', genres);
router.use('/person', person);
router.use('/gender', gender);


module.exports = router;