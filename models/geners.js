const mongoose=require('mongoose')
const Joi=require('joi')




const generSchema=new mongoose.Schema({
    name:String,
    date:{type:Date,default:Date.now}
  })
  
  const Gener=mongoose.model('Gener',generSchema)

function  validateGener(gener){
    const schema= Joi.object({
        name:Joi.string().required().min(5).max(25)
    })

    return   schema.validate(gener)
}


exports.Gener=Gener
exports.validate=validateGener;

