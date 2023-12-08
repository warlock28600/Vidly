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
        default: Date.now()
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