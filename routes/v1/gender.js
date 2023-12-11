const express = require('express');
const router = express.Router();
const {Gender, validate} = require('../../models/gender');


router.use(express.json());

router.get('/', async (req, res) => {
    const genders = await Gender.find();
    res.send(genders);
});

router.get('/:id', async (req, res) => {
    const gender = await Gender.findById(req.params.id);
    if (!gender) {
        res.status(400).send(`the gender with id ${req.params.id} not exists`);
    }
    res.send(gender);
});


router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if (error) {
        res.status(400).send(error.message);
    }
    let gender = new Gender({
        Title: req.body.Title
    });

    gender = await gender.save();
    res.send(gender);
});

router.put('/:id', async (req, res) => {
    const {error} = validate(req.body);
    if (error) {
        res.status(400).send(error.message);
    }

    const gender = await Gender.findOneAndUpdate(req.params.id, {
        Title: req.body.Title
    }, {new: true});

    if (!gender) {
        res.status(400).send(`the gender with id ${req.params.id} not exists`);
    }

    res.send(gender);
});


router.delete('/:id', async (req, res) => {
    const gender = await Gender.findByIdAndDelete(req.params.id);

    if (!gender) {
        res.status(400).send(`the gender with id ${req.params.id} not exists`);
    }

    res.send(gender);
});


module.exports = router;