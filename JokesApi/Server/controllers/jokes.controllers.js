const Jokes = require("../models/jokes.models");

module.exports.findAllJokes = (req, res) => {
  Jokes.find()
    .then((allJokes) => {
      res.json({ jokes: allJokes });
    })
    .catch((err) => res.status(400).json({ errMessage: err }));
};

module.exports.findOneJoke = (req, res) => {
  Jokes.findOne({ _id: req.params.id })
    .then((oneJoke) => {
      res.json({ jokes: oneJoke });
    })
    .catch((err) => res.status(400).json({ errMessage: err }));
};

module.exports.createNewJoke = (req, res) => {
  Jokes.create(req.body)
    .then((newJoke) => {
      res.json({ jokes: newJoke });
    })
    .catch((err) => res.status(400).json({ errMessage: err }));
};

module.exports.updateJoke = (req, res) => {
  Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updateJoke) => {
      res.json({ jokes: updateJoke });
    })
    .catch((err) => res.status(400).json({ errMessage: err }));
};

module.exports.deleteJoke = (req, res) => {
  Jokes.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => res.status(400).json({ errMessage: err }));
};
