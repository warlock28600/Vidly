const express = require("express");
const { string, date } = require("joi");
const router = express.Router();
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/Vidly')
.then(()=>{console.log('connected to database....')})
.catch(err=>{console.error('could not connect to database',err)})

const generSchema=new mongoose.Schema({
  name:String,
  date:{type:Date,default:Date.now}
})

const Gener=mongoose.model('Gener',generSchema)


async function craeteGener(){
  const gener=new Gener({
    name:'Deram'
  })
  
  const result=await gener.save()
  console.log(result)
}


async function getGener(){
  const geners=await Gener.find();
  console.log(geners)
}

getGener()



const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Deram" },
  { id: 3, name: "thriler" },
];

router.use(express.json());

router.get("/", (req, res) => {
  res.send(genres);
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
