var express = require('express');
var app = module.exports = express();
import Race from '../models/race-model';

// find all races
app.get('/race', (req, res) => {
  Race.find((err, results) => {
    if (err) return res.status(500).send(err);
    return res.send(200).send(results);
  });
});

// find race by id
app.get('/race/:id', (req, res) => {
  const id = req.params.id;

  Race.findById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.send(200).send(result);
  });
});

// find race by name
app.get('/race/name/:name([A-Za-z]+)', function(req, res){
  const name = req.params.name;

  Race.find({ name: name }, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.send(200).send(result);
  });
});
