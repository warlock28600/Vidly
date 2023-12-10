const mongoose = require('mongoose')
const Joi = require('joi')

const personSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 25
    },
    LastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 25
    },
    date: {
        type: Date,
        default: Date.now
    },
    FatherName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 25
    },
    Mobile: {
        type: String,
        maxLength: 11,
        minLength: 11
    },
    NationalCode: {
        type: String,
        minLength: 10,
        maxLength: 10
    },
    Email:{
        type:String,
    }
})

const Person = mongoose.model('Person', personSchema)


function validatePerson(gener) {
    const schema = Joi.object({
        FirstName: Joi.string().required().min(3).max(25),
        LastName: Joi.string().required().min(3).max(25),
        FatherName: Joi.string(),
        Mobile: Joi.string().min(11).max(11),
        NationalCode: Joi.string().min(10).max(10),
        Email: Joi.string()
    })

    return schema.validate(gener)
}


exports.Person = Person
exports.validate = validatePerson;