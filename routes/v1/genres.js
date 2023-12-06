const express = require("express");
const { Gener, validate } = require("../../models/geners");
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  const geners = await Gener.find();
  res.send(geners);
});

router.get("/:id", async (req, res) => {
  // if (!genre) {
  //   res.status(400).send(`genre with id ${req.params.id} dose not exists`);
  // }
  // res.status(200).send(genre);
});

router.post("/", (req, res) => {
  const gener = {
    id: genres.length + 1,
    name: req.body.name,
  };

  genres.push(gener);
  res.status(200).send(gener);
});

router.put("/:id",async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.send(error.message);
  }
  let genre = await Gener.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  if (!genre) {
    res.status(400).send(`genre with id ${req.params.id} dose not exists`);
  }
  res.status(200).send(genre);
});

module.exports = router;
