const express=require('express');
const router=express.Router()
const genres=require('./genres')
const person=require('./person')



router.use('/genres',genres)
router.use('/person', person)


module.exports=router