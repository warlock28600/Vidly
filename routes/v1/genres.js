const express = require("express");
const router = express.Router();

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

module.exports = router;
