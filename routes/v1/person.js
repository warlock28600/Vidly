const express = require('express')
const router = express.Router()
const {Person, validate} = require("../../models/person");
const mongoose = require('mongoose')


router.use(express.json())

router.get('/', async (req, res) => {
    const persons = await Person.find()
    res.send(persons)
})

router.get('/:id', async (req, res) => {
    const person = await Person.findById(req.params.id)
    if (!person) {
        res.status(400).send(`person with id ${req.params.id} not exists`)
    }
    res.send(person)
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if (error) {
        res.send(error.message)
    }
    let person = new Person({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        FatherName: req.body.FatherName,
        Mobile: req.body.Mobile,
        NationalCode: req.body.NationalCode,
        Email: req.body.Email
    })

    person = await person.save()
    res.send(person)

})

router.put('/:id', async (req, res) => {

    const {error} = validate(req.body)
    if (error) {
        res.send(error.message)
    }
    let person = await Person.findOneAndUpdate(req.params.id, {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        FatherName: req.body.FatherName,
        Mobile: req.body.Mobile,
        NationalCode: req.body.NationalCode,
        Email: req.body.Email
    }, {new: true})

    if (!person) {
        res.status(400).send(`person with id ${req.params.id} not exists`)
    }
    res.status(200).send(person)
})

router.delete('/:id', async (req, res) => {
    const person = await Person.findByIdAndDelete(req.params.id)

    if (!person) {
        res.status(400).send(`person with id ${req.params.id} not exists`)
    }

    res.send(person)
})


module.exports = router