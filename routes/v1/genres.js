const express = require("express");
const {Gener,validate}=require('../../models/geners')
const router = express.Router();
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/Vidly')
.then(()=>{console.log('connected to database....')})
.catch(err=>{console.error('could not connect to database',err)})

router.use(express.json());

router.get("/", async (req, res) => {
  const geners=await Gener.find()
  res.send(geners);
});

router.get("/:id", (req, res) => {
  let genre = genres.find((genre) => {
    return genre.id == req.params.id;
  });

  if (!genre) {
    res.status(400).send(`genre with id ${req.params.id} dose not exists`);
  }

  res.status(200).send(genre);
});

router.post("/", (req, res) => {
  const gener = {
    id: genres.length + 1,
    name: req.body.name,
  };

  genres.push(gener);
  res.status(200).send(gener);
});


router.put('/:id',(req,res)=>{
  const gener=genres.find((gener)=>{
    return gener.id=req.params.id
  })
if(!gener){
  res.status(400).send(`genre with id ${req.params.id} dose not exists`)
}
  gener.name=req.body.name;
  res.status(200).send(gener)
})


module.exports = router;
