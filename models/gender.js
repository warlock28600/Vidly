const mongoose = require('mongoose');
const Joi = require('joi');


const genderSchema = new mongoose.Schema({
    Title: String,
    Date: {type: Date, default: Date.now}
});

const Gender = mongoose.model('Gender', genderSchema);

function validateGender(gender) {
    const schema = Joi.object({
        Title: Joi.string().required().min(2).max(25)
    });

    return schema.validate(gender);
}

exports.Gender = Gender;
exports.validate = validateGender;