const express=require('express')
const router=express.Router()

const genres=[
    {id:1,name:'Action'},
    {id:2,name:'Deram'},
    {id:3,name:'thriler'}
]


router.get('/',(req,res)=>{
res.send(genres)
})


router.get('/:id',(req,res)=>{
    let genre=genres.find((genre)=>{
        return genre.id==req.params.id
    })

    if(!genre){
        res.status(400).send(`genre with id ${req.params.id} dose not exists`)
    }

    res.status(200).send(genre)
})






module.exports=router