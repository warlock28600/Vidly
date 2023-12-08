const express = require("express");
const { Gener, validate } = require("../../models/geners");
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  const geners = await Gener.find();
  res.send(geners);
});

router.get("/:id", async (req, res) => {
  const gener = await Gener.findById(req.params.id);
  if (!gener) {
    res.status(400).send(`the gener with id ${req.params.id} dose not exists`);
  }
  res.status(200).send(gener);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.send(error.message);
  }
  let genre = new Gener({
    name: req.body.name,
  });
  gener = await genre.save();
  res.status(200).send(gener);
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
  const gener = await Gener.findByIdAndDelete(req.params.id);
  if (!gener) {
    res.status(400).send(`genre with id ${req.params.id} dose not exists`);
  }
  res.send(gener);
});

module.exports = router;
